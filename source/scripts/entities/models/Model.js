import { ModelDirection, ModelState } from "../../constants/model.js";
import { SYSTEM_SOUND } from "../../constants/sound.js";
import * as control from "../../engine/InputHandler.js";
import { playSound, stopSound } from "../../engine/SoundHandler.js";

export class Model {
    constructor(name, x, y, direction, playerId) {
        this.name = name;
        this.playerId = playerId;
        this.idle = [];
        this.walkRight = [];
        this.walkLeft = [];
        this.position = { x, y };
        this.velocity = 0;
        this.direction = direction;

        this.frames = new Map();
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.animations = {};

        this.image = new Image();

        this.pushBox = { x: 0, y: 0, width: 0, height: 0 };
        this.reachLimit = false;
        
        this.states = {
            [ModelState.IDLE]: {
                init: this.handleIdleInit.bind(this),
                update: this.handleIdleState.bind(this),
                validFrom: [undefined, ModelState.IDLE, ModelState.WALK_RIGHT, ModelState.WALK_LEFT]
            },
            [ModelState.WALK_RIGHT]: {
                init: this.handleWalkRightInit.bind(this),
                update: this.handleWalkRightState.bind(this),
                validFrom: [ModelState.IDLE]
            },
            [ModelState.WALK_LEFT]: {
                init: this.handleWalkLeftInit.bind(this),
                update: this.handleWalkLeftState.bind(this),
                validFrom: [ModelState.IDLE]
            }
        }

        this.changeState(ModelState.IDLE);
    }

    getPushBox(frameKey) {
        const [, [x, y, width, height] = [0, 0, 0, 0]] = this.frames.get(frameKey);

        return { x, y, width, height };
    }

    changeState(newState) {
        if (newState === this.currentState || !this.states[newState].validFrom.includes(this.currentState)) {
            return;
        }

        this.currentState = newState;
        this.animationFrame = 0;

        this.states[this.currentState].init();
    } 

    handleIdleInit() {
        this.velocity = 0;
    }

    handleIdleState() {
        if (control.isLeft(this.playerId)) {
            this.changeState(ModelState.WALK_LEFT);
            playSound(SYSTEM_SOUND.walk);
        }
        else if (control.isRight(this.playerId)) {
            this.changeState(ModelState.WALK_RIGHT);
            playSound(SYSTEM_SOUND.walk);
        }
    }
    
    handleWalkRightInit() {
        this.direction = ModelDirection.RIGHT;
    }

    handleWalkRightState() {
        if (!control.isRight(this.playerId)) {
            this.changeState(ModelState.IDLE);
            stopSound(SYSTEM_SOUND.walk);
        }
    }

    handleWalkLeftInit() {
        this.direction = ModelDirection.LEFT;
    }

    handleWalkLeftState() {
        if (!control.isLeft(this.playerId)) {
            this.changeState(ModelState.IDLE);
            stopSound(SYSTEM_SOUND.walk);
        }
    }

    updateStageConstraints(context) {
        if (this.position.x > context.canvas.width - this.pushBox.width - 100) {
            this.position.x = context.canvas.width - this.pushBox.width - 100;
        }
    
        if (this.position.x < this.pushBox.width + 100) {
            this.position.x = this.pushBox.width + 100;
        }
    }

    updateAnimation(time) {
        const animation = this.animations[this.currentState];
        const [frameKey, frameDelay] = animation[this.animationFrame];

        if (time.previous > this.animationTimer + frameDelay) {
            this.animationTimer = time.previous;
            
            if (frameDelay > 0) {
                this.animationFrame++;
                this.pushBox = this.getPushBox(frameKey);
            }

            if (this.animationFrame >= animation.length) {
                this.animationFrame = 0;
            }
        }
    }

    update(time, context) {
        this.position.x += this.velocity * time.secondsPassed;

        this.states[this.currentState].update(time, context);
        this.updateAnimation(time);
        this.updateStageConstraints(context);
    }

    drawDebug(context) {
        const [frameKey] = this.animations[this.currentState][this.animationFrame];
        const pushBox = this.getPushBox(frameKey);

        context.lineWidth = 1;
        
        // Push Box
        context.beginPath();
        context.strokeStyle = '#55FF55';
        context.fillStyle = '#55FF5555';
        context.fillRect(this.position.x + pushBox.x, this.position.y + this.pushBox.y, pushBox.width, pushBox.height);
        context.stroke();

        // Origin
        context.beginPath();
        context.strokeStyle = 'white';
        context.moveTo(this.position.x - 5, this.position.y);
        context.lineTo(this.position.x + 4, this.position.y);
        context.moveTo(this.position.x, this.position.y - 5);
        context.lineTo(this.position.x, this.position.y + 4);
        context.stroke();
    }

    draw(context) {
        const [frameKey] = this.animations[this.currentState][this.animationFrame];
        const [[src, [originX, originY]]] = this.frames.get(frameKey);
        this.image = src;

        context.scale(this.direction, 1);
        context.drawImage(this.image, this.position.x * this.direction - originX, this.position.y - originY);
        context.setTransform(1, 0, 0, 1, 0, 0);

        // this.drawDebug(context);
    }
}
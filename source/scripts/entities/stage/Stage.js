import { SceneManager } from "../../scenes/SceneManager.js";
import { MsgBox } from "../overlays/MsgBox.js";
import * as control from "../../engine/InputHandler.js";
import { rectsOverlap } from "../../utils/collision.js";
import { SYSTEM_VALUE } from "../../constants/globalState.js";
import { playSound, stopSound } from "../../engine/SoundHandler.js";
import { SYSTEM_SOUND } from "../../constants/sound.js";

export class Stage {
    constructor(x, y, model) {
        this.image = new Image();
        
        this.currentInteract = [0, 0, 0, 0];
        this.interactPoints = [];

        this.model = model;
        this.position = { x, y };
        this.speed;

        this.isInteracting = false;
        this.config = {};

        this.msgBox = new MsgBox();
        this.sceneManager = new SceneManager();
    }

    wayPointImplement(index) {
        if (this.interactPoints[index][2] == 'lock') {
            playSound(SYSTEM_SOUND.doorLock);
            setTimeout(() => {
                stopSound(SYSTEM_SOUND.doorLock);
            }, 700);
            return;
        }

        if (!this.interactPoints[index][2].toString().includes('Ghost')) {
            playSound(SYSTEM_SOUND.doorOpen);
            setTimeout(() => {
                stopSound(SYSTEM_SOUND.doorOpen);
            }, 500);

            if (SYSTEM_VALUE.enterRoom == false) {
                SYSTEM_VALUE.enterRoom = true;
                SYSTEM_VALUE.enterPos = this.interactPoints[index][0][0] + 15;
                this.sceneManager.newScene(this.interactPoints[index][2], 800, this.interactPoints[index][3]);
            }
            else {
                SYSTEM_VALUE.enterRoom = false;
                this.sceneManager.newScene(this.interactPoints[index][2], 800, SYSTEM_VALUE.enterPos);
            }
        }
        else {
            this.sceneManager.newScene(this.interactPoints[index][2], 800, SYSTEM_VALUE.enterPos);
        }
    }

    checkPlayerInteract() {
        if (this.isInteracting == true) {
            if (
                rectsOverlap(
                    this.model.position.x + this.model.pushBox.x,
                    this.model.pushBox.width,
                    this.position.x + this.currentInteract[0][0],
                    this.currentInteract[0][2]
                )
            ) {
                this.msgBox.showMsg(
                    this.position.x + this.currentInteract[1][0],
                    this.position.y + this.currentInteract[1][1],
                    this.position.x + this.currentInteract[1][2],
                    this.position.y + this.currentInteract[1][3],
                    200,
                    70,
                    '[F] Interact'
                );
                if (control.isInteract(this.model.playerId)) {
                    this.wayPointImplement(this.interactPoints.indexOf(this.currentInteract));
                }
            }
            else {
                this.msgBox.deleteMsg();
                this.isInteracting = false;
            }
        }
        else {
            for (const interactPoint of this.interactPoints) {
                const [[x,,width,], ] = interactPoint;
    
                if (
                    rectsOverlap(
                        this.model.position.x + this.model.pushBox.x,
                        this.model.pushBox.width,
                        this.position.x + x,
                        width
                    )
                ) {
                    this.currentInteract = interactPoint;
                    this.isInteracting = true;
                    break;
                }
            }
        }
    }

    updateStageConstraints() {
        this.model.position.x = 800;
        this.model.velocity = 0;

        if (this.model.position.x + this.model.pushBox.width == 900 && this.position.x > this.config.LIMIT.LEFT) {
            this.position.x = this.config.LIMIT.LEFT;
        }
        else if (this.model.position.x + this.model.pushBox.width == 900 && this.position.x < this.config.LIMIT.RIGHT) {
            this.position.x = this.config.LIMIT.RIGHT;
        }
    }

    update(time, context) {
        this.checkPlayerInteract(context);

        if (this.model.currentState.includes('Right')) {
            if (
                this.position.x < this.config.LIMIT.RIGHT && this.model.position.x + this.model.pushBox.width >= 900 || 
                this.position.x > this.config.LIMIT.LEFT && this.model.position.x + this.model.pushBox.width <= 900
            ) {
                this.model.velocity = 230;
            }
            else {
                this.updateStageConstraints();
                this.position.x += this.speed * time.secondsPassed;
            }
        }
        else if (this.model.currentState.includes('Left')) {
            if (
                this.position.x > this.config.LIMIT.LEFT && this.model.position.x + this.model.pushBox.width <= 900 ||
                this.position.x < this.config.LIMIT.RIGHT && this.model.position.x + this.model.pushBox.width >= 900
            ) {
                this.model.velocity = -230;
            }
            else {
                this.updateStageConstraints();
                this.position.x -= this.speed * time.secondsPassed;
            }
        }
    }

    drawDebug(context) {
        context.lineWidth = 1;
        
        for (const interactPoint of this.interactPoints) {
            const [[x, y, width, height], ] = interactPoint;
            context.beginPath();
            context.strokeStyle = '#55FF55';
            context.fillStyle = '#55FF5555';
            context.fillRect(this.position.x + x, this.position.y + y, width, height);
            context.stroke();
        }
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, 0);

        // this.drawDebug(context);
        this.msgBox.draw(context);
    }
}
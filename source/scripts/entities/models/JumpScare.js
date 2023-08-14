import { SYSTEM_SOUND } from "../../constants/sound.js";
import { playSound, stopSound } from "../../engine/SoundHandler.js";
import { EndScene } from "../../scenes/EndScene.js";
import { SceneManager } from "../../scenes/SceneManager.js";

export class JumpScare {
    constructor() {
        this.image = new Image();
        this.image.src = './assets/img/monster/jumpscare/scare1.png';

        this.animations = [];
        for (let i = 0; i < 9; i++) {
            this.animations[i] = new Image();
            this.animations[i].src = `./assets/img/monster/jumpscare/scare${i+1}.png`;
        }

        this.frames = new Map([
            ['idle-1', this.animations[0]],
            ['idle-2', this.animations[1]],
            ['idle-3', this.animations[2]],
            ['idle-4', this.animations[3]],
            ['idle-5', this.animations[4]],
            ['idle-6', this.animations[5]],
            ['idle-7', this.animations[6]],
            ['idle-8', this.animations[7]],
            ['idle-9', this.animations[8]],
        ]);

        this.animations = {
            idle: [
                60,
                60,
                60,
                60,
                60,
                60,
                60,
                60,
                60,
            ]
        }

        this.animationFrame = 1;
        this.animationTimer = 0;
        this.doneAnimating = false;

        playSound(SYSTEM_SOUND.jumpscare);
    }

    update(time) {
        const frameDelay = this.animations.idle[this.animationFrame - 1];

        if (time.previous > this.animationTimer + frameDelay && this.doneAnimating == false) {
            this.animationTimer = time.previous;
            
            this.animationFrame++;
            if (this.animationFrame > 9) {
                this.doneAnimating = true;
                setTimeout(function() {
                    stopSound(SYSTEM_SOUND.jumpscare);
                    new SceneManager().newScene(EndScene, 0, 0);
                }, 2000);
            }
        }
    }

    draw(context) {
        if (this.doneAnimating == false) {
            const src = this.frames.get(`idle-${this.animationFrame}`);
            this.image = src;
    
            context.drawImage(this.image, 0, 0);
        }
    }
}
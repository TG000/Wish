import { SYSTEM_SOUND } from "../../constants/sound.js";
import { playSound, stopSound } from "../../engine/SoundHandler.js";
import { CorridorScene } from "../../scenes/CorridorScene.js";
import { SceneManager } from "../../scenes/SceneManager.js";

export class Start {
    constructor() {
        this.image = new Image();
        this.image.src = './assets/img/stage_build/start_class_3.png';

        this.animationFrame = 0;
        this.animationTimer = 0;
        this.frameDelay = 500;

        this.sceneManager = new SceneManager();
        playSound(SYSTEM_SOUND.start);
    }

    update(time, context) {
        if (this.frameDelay >= 60) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            this.image.src = `./assets/img/stage_build/start_class_${this.animationFrame + 1}.png`;
    
            if (time.previous > this.animationTimer + this.frameDelay) {
                this.animationTimer = time.previous;
    
                this.animationFrame++;
                this.frameDelay -= 10;
                if (this.animationFrame > 2) this.animationFrame = 0;
            }
        }
        else {
            stopSound(SYSTEM_SOUND.start);
            this.sceneManager.newScene(CorridorScene, 800, -13000);
        }
    }

    draw(context) {
        context.drawImage(this.image, 0, 0);
    }
}
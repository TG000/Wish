import { pollGamepads, registerGamepadEvents, registerKeyboardEvents } from "./engine/InputHandler.js";
import { getContext } from "./utils/context.js";
import { SceneManager } from "./scenes/SceneManager.js";

export class Wish2DHorror {
    constructor(canvas) {
        this.context = getContext(canvas);
        
        this.frameTime = {
            previous: 0,
            secondsPassed: 0
        };

        this.sceneManager = new SceneManager();
        this.sceneManager.initScene();
        this.scene = this.sceneManager.getCurrentScene();
    }

    updateScene() {
        if (this.sceneManager.getCurrentScene() !== this.scene) {
            this.scene = this.sceneManager.getCurrentScene();

            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        }
    }

    frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

        this.frameTime = {
            secondsPassed: (time - this.frameTime.previous) / 1000,
            previous: time
        }
        
        pollGamepads();
        this.updateScene();

        this.scene.update(this.frameTime, this.context);
        this.scene.draw(this.context);
    }
    
    start() {
        registerKeyboardEvents();
        registerGamepadEvents();

        window.requestAnimationFrame(this.frame.bind(this));
    }
}
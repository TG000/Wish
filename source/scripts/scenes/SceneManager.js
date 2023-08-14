import { SYSTEM_VALUE } from "../constants/globalState.js";
import { StartScene } from "./StartScene.js";

export class SceneManager {
    constructor() {

    }

    getCurrentScene() {
        return SYSTEM_VALUE.currentScene;
    }

    initScene() {
        SYSTEM_VALUE.currentScene = new StartScene();
    }

    newScene(sceneName, charPos, stagePos) {
        SYSTEM_VALUE.currentScene = new sceneName(charPos, stagePos);
    }
}
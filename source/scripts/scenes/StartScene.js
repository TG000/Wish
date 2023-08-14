import { StartDecor } from "../entities/stage/StartDecor.js";
import { Start } from "../entities/stage/Start.js";
import { Scene } from "./Scene.js";

export class StartScene extends Scene {
    constructor() {
        super();
        this.stage = new Start();
        this.sceneDecor = new StartDecor();

        this.entities = [
            this.stage,
            this.sceneDecor,
        ];
    }
}
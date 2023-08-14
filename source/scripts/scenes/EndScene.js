import { End } from "../entities/stage/End.js";
import { EndDecor } from "../entities/stage/EndDecor.js";
import { Scene } from "./Scene.js";

export class EndScene extends Scene {
    constructor() {
        super();

        this.entities = [
            new End(),
            new EndDecor()
        ];
    }
}
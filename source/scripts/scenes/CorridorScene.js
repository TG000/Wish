import { INPUT } from "../constants/globalState.js";
import { ModelDirection } from "../constants/model.js";
import { SYSTEM_SOUND } from "../constants/sound.js";
import { CORRIDOR_CONFIG } from "../constants/stage.js";
import { playSound } from "../engine/SoundHandler.js";
import { NozomiAdult } from "../entities/models/NozomiAdult.js";
import { Shadow } from "../entities/models/Shadow.js";
import { Corridor } from "../entities/stage/Corridor.js";
import { CorridorDecor } from "../entities/stage/CorridorDecor.js";
import { Scene } from "./Scene.js";

export class CorridorScene extends Scene {
    constructor(charPos, stagePos) {
        super();
        this.model = new NozomiAdult(charPos, CORRIDOR_CONFIG.FLOOR, ModelDirection.RIGHT, INPUT.id);
        this.stage = new Corridor(stagePos, 0, this.model);
        this.sceneDecor = new CorridorDecor(stagePos, 0, this.stage, this.model);

        this.entities = [
            this.stage,
            new Shadow(this.model, CORRIDOR_CONFIG),
            this.model,
            this.sceneDecor,
        ];

        playSound(SYSTEM_SOUND.bgm, 0.5);
        playSound(SYSTEM_SOUND.rain);
    }
}
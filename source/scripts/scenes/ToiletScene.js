import { INPUT } from "../constants/globalState.js";
import { ModelDirection } from "../constants/model.js";
import { SYSTEM_SOUND } from "../constants/sound.js";
import { TOILET_CONFIG } from "../constants/stage.js";
import { stopSound } from "../engine/SoundHandler.js";
import { NozomiAdult } from "../entities/models/NozomiAdult.js";
import { Shadow } from "../entities/models/Shadow.js";
import { Toilet } from "../entities/stage/Toilet.js";
import { Scene } from "./Scene.js";

export class ToiletScene extends Scene {
    constructor(charPos, stagePos) {
        super();
        this.model = new NozomiAdult(charPos, TOILET_CONFIG.FLOOR, ModelDirection.RIGHT, INPUT.id);
        this.stage = new Toilet(stagePos, 0, this.model);

        this.entities = [
            this.stage,
            new Shadow(this.model, TOILET_CONFIG),
            this.model,
        ];

        stopSound(SYSTEM_SOUND.rain);
    }
}
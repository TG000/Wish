import { SYSTEM_SOUND } from "../constants/sound.js";
import { stopSound } from "../engine/SoundHandler.js";
import { JumpScare } from "../entities/models/JumpScare.js";
import { Scene } from "./Scene.js";

export class GhostScene extends Scene {
    constructor() {
        super();
        this.model = new JumpScare();

        this.entities = [
            this.model,
        ];

        stopSound(SYSTEM_SOUND.bgm);
    }
}
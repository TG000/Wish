import { ENTRY_POINTS } from "../../constants/globalState.js";
import { CORRIDOR_CONFIG } from "../../constants/stage.js";
import { ToiletScene } from "../../scenes/ToiletScene.js";
import { Stage } from "./Stage.js";

export class Corridor extends Stage {
    constructor(x, y, model) {
        super(x, y, model);
        this.image.src = './assets/img/stage_build/full_bg.png';

        this.interactPoints = [
            [[648, 268, 173, 490], [733, 220, 635, 178], 'Room_A_Scene'],
            [[3380, 268, 173, 490], [3467, 220, 3367, 178], 'Room_B_Scene'],
            [[6110, 268, 173, 490], [6198, 220, 6098, 178], 'Room_C_Scene'],
            [[8845, 267, 177, 490], [8930, 220, 8830, 178], 'lock'],
            [[11604, 263, 185, 500], [11697, 220, 11597, 178], 'Teacher_Room_Scene'],
            [[13809, 330, 175, 430], [13895, 220, 13795, 178], 'lock'],
            [[14188, 330, 175, 430], [14274, 220, 14174, 178], ToiletScene, ENTRY_POINTS.Toilet],
            [[14748, 460, 50, 50], [14778, 350, 14678, 305], 'lock'],
        ];

        this.speed = -180;

        this.config = CORRIDOR_CONFIG;
    }
}
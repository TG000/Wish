import { TOILET_CONFIG } from "../../constants/stage.js";
import { CorridorScene } from "../../scenes/CorridorScene.js";
import { GhostScene } from "../../scenes/GhostScene.js";
import { Stage } from "./Stage.js";

export class Toilet extends Stage {
    constructor(x, y, model) {
        super(x, y, model);
        this.image.src = './assets/img/stage_build/toilet.png';

        this.interactPoints = [
            [[578, 660, 70, 70], [620, 380, 520, 335]],
            [[1730, 385, 250, 100], [1855, 300, 1755, 258], GhostScene],
            [[2150, 268, 115, 610], [2180, 220, 2080, 178], CorridorScene],
        ];

        this.speed = -180;

        this.config = TOILET_CONFIG;
    }
}
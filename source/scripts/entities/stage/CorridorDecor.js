import { Rain } from "../models/Rain.js";
import { StageDecor } from "./StageDecor.js";

export class CorridorDecor extends StageDecor {
    constructor(x, y, stage, model) {
        super(x, y, stage, model);
        this.image.src = './assets/img/background/bg1.png';

        for (let i = 0; i < 2; i++) {
            this.layers[i] = new Image();
        }
        this.layers[0].src = './assets/img/stage_build/fence.png';
        this.layers[1].src = './assets/img/stage_build/upper_wall.png';

        this.effect = new Rain();

        this.frames = new Map([
            ['fence', this.layers[0]],
            ['upper-wall', this.layers[1]]
        ]);
        this.speed = -360;
    }

    update(time, context) {
        super.update(time, context);
    
        this.effect.update(time, context);
    }

    draw(context) {
        super.draw(context);

        this.effect.draw(context);
    }
}
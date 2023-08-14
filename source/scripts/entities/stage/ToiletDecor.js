import { StageDecor } from "./StageDecor.js";

export class ToiletDecor extends StageDecor {
    constructor(x, y, stage, model) {
        super(x, y, stage, model);
        this.image.src = './assets/img/background/bg1.png';

        this.position.x *= 2;
        this.speed = -360;
    }
}
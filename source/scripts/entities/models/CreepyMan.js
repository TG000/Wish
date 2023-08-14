import { Monster } from "./Monster.js";

export class CreepyMan extends Monster {
    constructor(x, y) {
        super(x, y);

        this.image.src = './assets/img/monster/Monster-dam/Monster-damdungim1.png';
    }
}
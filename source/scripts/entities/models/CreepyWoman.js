import { Monster } from "./Monster.js";

export class CreepyWoman extends Monster {
    constructor(x, y) {
        super(x, y);

        this.image.src = './assets/img/monster/Monster-girl/Monster-girldungim1.png';
    }
}
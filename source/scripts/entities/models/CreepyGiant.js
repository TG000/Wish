import { Monster } from "./Monster.js";

export class CreepyGiant extends Monster {
    constructor(x, y) {
        super(x, y);

        this.image.src = './assets/img/monster/Monster-theduc/Monster-theducdungim.png';
    }
}
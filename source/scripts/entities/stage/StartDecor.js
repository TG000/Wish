import { randomNum } from "../../utils/random.js";
import { CreepyGiant } from "../models/CreepyGiant.js";
import { CreepyMan } from "../models/CreepyMan.js";
import { CreepyWoman } from "../models/CreepyWoman.js";

export class StartDecor {
    constructor() {
        this.entities = [
            new CreepyMan(randomNum(), 400),
            new CreepyWoman(randomNum(), 400),
            new CreepyGiant(randomNum(), 360)
        ];

        this.currentEntity = this.randomEntity();

        this.animationTimer = 0;
        this.frameDelay = 500;
    }

    randomEntity() {
        return this.entities[Math.floor(Math.random()*this.entities.length)]
    }

    update(time, context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    
        if (time.previous > this.animationTimer + this.frameDelay) {
            this.animationTimer = time.previous;

            this.frameDelay -= 10;
            this.currentEntity.update(time, context);
            this.currentEntity = this.randomEntity();
        }
    }

    draw(context) {
        this.currentEntity.draw(context);
    }
}
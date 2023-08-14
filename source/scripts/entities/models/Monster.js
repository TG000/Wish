import { randomNum } from "../../utils/random.js";

export class Monster {
    constructor(x, y) {
        this.image = new Image();

        this.position = { x, y };
    }

    update() {
        this.position.x = randomNum();
    }

    draw(context) {
        context.scale(1.5, 1.5);
        context.drawImage(this.image, this.position.x, this.position.y);
        context.setTransform(1, 0, 0, 1, 0, 0);
    }
}
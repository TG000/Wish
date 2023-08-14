import { ModelState } from "../../constants/model.js";
import { Model } from "./Model.js";

export class NozomiKid extends Model {
    constructor(x, y, direction, playerId) {
        super("NozomiKid", x, y, direction, playerId);

        this.image.src = './assets/img/nozomi_kid/idle1.png';

        for (let i = 0; i < 6; i++) {
            this.idle[i] = new Image();
            this.idle[i].src = `./assets/img/nozomi_kid/idle${i+1}.png`;

            this.walkRight[i] = new Image();
            this.walkRight[i].src = `./assets/img/nozomi_kid/walk${i+1}.png`;

            this.walkLeft[i] = new Image();
            this.walkLeft[i].src = `./assets/img/nozomi_kid/walk${i+1}.png`;
        }

        this.frames = new Map([
            // Idle
            ['idle-1', [this.idle[0], [65, 305]]],
            ['idle-2', [this.idle[1], [67, 305]]],
            ['idle-3', [this.idle[2], [66, 302]]],
            ['idle-4', [this.idle[3], [66, 300]]],
            ['idle-5', [this.idle[4], [70, 299]]],
            ['idle-6', [this.idle[5], [72, 299]]],

            // Walk Right
            ['walkRight-1', [this.walkRight[0], [75, 302]]],
            ['walkRight-2', [this.walkRight[1], [78, 302]]],
            ['walkRight-3', [this.walkRight[2], [72, 301]]],
            ['walkRight-4', [this.walkRight[3], [68, 300]]],
            ['walkRight-5', [this.walkRight[4], [69, 302]]],
            ['walkRight-6', [this.walkRight[5], [68, 300]]],

            // Walk Left
            ['walkLeft-1', [this.walkLeft[0], [75, 302]]],
            ['walkLeft-2', [this.walkLeft[1], [78, 302]]],
            ['walkLeft-3', [this.walkLeft[2], [72, 301]]],
            ['walkLeft-4', [this.walkLeft[3], [68, 300]]],
            ['walkLeft-5', [this.walkLeft[4], [69, 302]]],
            ['walkLeft-6', [this.walkLeft[5], [68, 300]]]
        ]);

        this.animations = {
            [ModelState.IDLE]: [
                ['idle-1', 130], 
                ['idle-2', 130], 
                ['idle-3', 130], 
                ['idle-4', 130], 
                ['idle-5', 130], 
                ['idle-6', 130]
            ],
            [ModelState.WALK_RIGHT]: [
                ['walkRight-1', 136.25],
                ['walkRight-2', 136.25],
                ['walkRight-3', 136.25],
                ['walkRight-4', 136.25], 
                ['walkRight-5', 136.25],
                ['walkRight-6', 136.25]
            ],
            [ModelState.WALK_LEFT]: [
                ['walkLeft-1', 136.25],
                ['walkLeft-2', 136.25],
                ['walkLeft-3', 136.25],
                ['walkLeft-4', 136.25], 
                ['walkLeft-5', 136.25],
                ['walkLeft-6', 136.25]
            ],
        }
    }
}

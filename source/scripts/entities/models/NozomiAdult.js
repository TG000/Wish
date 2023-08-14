import { ModelState, PushBox } from "../../constants/model.js";
import { Model } from "./Model.js";

export class NozomiAdult extends Model {
    constructor(x, y, direction, playerId) {
        super("NozomiAdult", x, y, direction, playerId);

        this.image.src = './assets/img/nozomi_adult/idle1.png';

        for (let i = 0; i < 6; i++) {
            this.idle[i] = new Image();
            this.idle[i].src = `./assets/img/nozomi_adult/idle${i+3}.png`;
        }
        
        for (let i = 0; i < 18; i++) {
            this.walkRight[i] = new Image();
            this.walkRight[i].src = `./assets/img/nozomi_adult/walk${i+1}.png`;
    
            this.walkLeft[i] = new Image();
            this.walkLeft[i].src = `./assets/img/nozomi_adult/walk${i+1}.png`;
        }

        this.frames = new Map([
            // Idle
            ['idle-1', [[this.idle[0], [39, 384]], PushBox.IDLE]],
            ['idle-2', [[this.idle[1], [39, 384]], PushBox.IDLE]],
            ['idle-3', [[this.idle[2], [44, 384]], PushBox.IDLE]],
            ['idle-4', [[this.idle[3], [45, 384]], PushBox.IDLE]],
            ['idle-5', [[this.idle[4], [47, 384]], PushBox.IDLE]],
            ['idle-6', [[this.idle[5], [45, 384]], PushBox.IDLE]],

            // Walk Right
            ['walkRight-1', [[this.walkRight[0], [52, 392]], PushBox.WALK]],
            ['walkRight-2', [[this.walkRight[1], [66, 391]], PushBox.WALK]],
            ['walkRight-3', [[this.walkRight[2], [68, 392]], PushBox.WALK]],
            ['walkRight-4', [[this.walkRight[3], [76, 391]], PushBox.WALK]],
            ['walkRight-5', [[this.walkRight[4], [66, 392]], PushBox.WALK]],
            ['walkRight-6', [[this.walkRight[5], [49, 393]], PushBox.WALK]],
            ['walkRight-7', [[this.walkRight[6], [49, 393]], PushBox.WALK]],
            ['walkRight-8', [[this.walkRight[7], [47, 394]], PushBox.WALK]],
            ['walkRight-9', [[this.walkRight[8], [55, 389]], PushBox.WALK]],
            ['walkRight-10', [[this.walkRight[9], [59, 391]], PushBox.WALK]],
            ['walkRight-11', [[this.walkRight[10], [54, 394]], PushBox.WALK]],
            ['walkRight-12', [[this.walkRight[11], [74, 391]], PushBox.WALK]],
            ['walkRight-13', [[this.walkRight[12], [65, 389]], PushBox.WALK]],
            ['walkRight-14', [[this.walkRight[13], [48, 393]], PushBox.WALK]],
            ['walkRight-15', [[this.walkRight[14], [49, 393]], PushBox.WALK]],
            ['walkRight-16', [[this.walkRight[15], [46, 394]], PushBox.WALK]],
            ['walkRight-17', [[this.walkRight[16], [56, 390]], PushBox.WALK]],
            ['walkRight-18', [[this.walkRight[17], [59, 391]], PushBox.WALK]],

            // Walk Left
            ['walkLeft-1', [[this.walkLeft[0], [52, 392]], PushBox.WALK]],
            ['walkLeft-2', [[this.walkLeft[1], [66, 391]], PushBox.WALK]],
            ['walkLeft-3', [[this.walkLeft[2], [68, 392]], PushBox.WALK]],
            ['walkLeft-4', [[this.walkLeft[3], [76, 391]], PushBox.WALK]],
            ['walkLeft-5', [[this.walkLeft[4], [66, 392]], PushBox.WALK]],
            ['walkLeft-6', [[this.walkLeft[5], [49, 393]], PushBox.WALK]],
            ['walkLeft-7', [[this.walkLeft[6], [49, 393]], PushBox.WALK]],
            ['walkLeft-8', [[this.walkLeft[7], [47, 394]], PushBox.WALK]],
            ['walkLeft-9', [[this.walkLeft[8], [55, 389]], PushBox.WALK]],
            ['walkLeft-10', [[this.walkLeft[9], [59, 391]], PushBox.WALK]],
            ['walkLeft-11', [[this.walkLeft[10], [54, 394]], PushBox.WALK]],
            ['walkLeft-12', [[this.walkLeft[11], [74, 391]], PushBox.WALK]],
            ['walkLeft-13', [[this.walkLeft[12], [65, 389]], PushBox.WALK]],
            ['walkLeft-14', [[this.walkLeft[13], [48, 393]], PushBox.WALK]],
            ['walkLeft-15', [[this.walkLeft[14], [49, 393]], PushBox.WALK]],
            ['walkLeft-16', [[this.walkLeft[15], [46, 394]], PushBox.WALK]],
            ['walkLeft-17', [[this.walkLeft[16], [56, 390]], PushBox.WALK]],
            ['walkLeft-18', [[this.walkLeft[17], [59, 391]], PushBox.WALK]]
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
                ['walkRight-1', 125],
                ['walkRight-2', 125],
                ['walkRight-3', 125],
                ['walkRight-4', 125],
                ['walkRight-5', 125],
                ['walkRight-6', 125],
                ['walkRight-7', 125],
                ['walkRight-8', 125],
                ['walkRight-9', 125],
                ['walkRight-10', 125],
                ['walkRight-11', 125],
                ['walkRight-12', 125],
                ['walkRight-13', 125],
                ['walkRight-14', 125],
                ['walkRight-15', 125],
                ['walkRight-16', 125],
                ['walkRight-17', 125],
                ['walkRight-18', 125],
            ],
            [ModelState.WALK_LEFT]: [
                ['walkLeft-1', 125],
                ['walkLeft-2', 125],
                ['walkLeft-3', 125],
                ['walkLeft-4', 125],
                ['walkLeft-5', 125],
                ['walkLeft-6', 125],
                ['walkLeft-7', 125],
                ['walkLeft-8', 125],
                ['walkLeft-9', 125],
                ['walkLeft-10', 125],
                ['walkLeft-11', 125],
                ['walkLeft-12', 125],
                ['walkLeft-13', 125],
                ['walkLeft-14', 125],
                ['walkLeft-15', 125],
                ['walkLeft-16', 125],
                ['walkLeft-17', 125],
                ['walkLeft-18', 125]
            ]
        }
    }
}

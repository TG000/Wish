import { fillTextMultiLine } from "../../utils/text.js";
import * as control from "../../engine/InputHandler.js";
import { INPUT } from "../../constants/globalState.js";
import { ToMainMenu } from "../../index.js";
import { playSound, stopSound } from "../../engine/SoundHandler.js";
import { SYSTEM_SOUND } from "../../constants/sound.js";

export class EndDecor {
    constructor() {
        this.msg = 'Thank you for playing this demo version!\n[M] Back to main menu';

        playSound(SYSTEM_SOUND.end);
    }

    update() {
        if (control.isToTitle(INPUT.id)) {
            stopSound(SYSTEM_SOUND.end);
            ToMainMenu();
        }
    }

    draw(context) {
        context.font = "60px Comic Sans MS";
        context.fillStyle = 'white';
        context.textAlign = "center";
        fillTextMultiLine(context, this.msg, context.canvas.width / 2, context.canvas.height / 2);
    }
}
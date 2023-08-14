export class FpsCounter {
    constructor() {
        this.fps = 0;
    }

    update(time) {
        this.fps = Math.trunc(1 / time.secondsPassed);
    }

    draw(context) {
        context.font = "35px Arial";
        context.fillStyle = "#00FF00";
        context.textAlign = "right";
        context.fillText(`${this.fps}`, context.canvas.width - 5, context.canvas.height - 5);
    }
}
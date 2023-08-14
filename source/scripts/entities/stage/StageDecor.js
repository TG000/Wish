export class StageDecor {
    constructor(x, y, stage, model) {
        this.image = new Image();

        this.layers = [];

        this.frames = new Map();

        this.model = model;
        this.stage = stage;

        this.position = { x, y };
        this.position.x *= 2;

        this.speed;
    }

    update(time) {
        if (this.model.currentState.includes('Right') || this.model.currentState.includes('Left')) {
            if (this.stage.position.x < this.currentStagePos) {
                this.position.x += this.speed * time.secondsPassed;
            }
            else if (this.stage.position.x > this.currentStagePos){
                this.position.x -= this.speed * time.secondsPassed;
            }
            this.currentStagePos = this.stage.position.x;
        }
    }

    drawFrame(context, frameKey, x) {
        const src = this.frames.get(frameKey);
        this.image = src;

        context.drawImage(this.image, x, 0); 
    }

    draw(context) {
        for (const [key,] of this.frames.entries()) {
            this.drawFrame(context, key, this.position.x);
        }
    }
}
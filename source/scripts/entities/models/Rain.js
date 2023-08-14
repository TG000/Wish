export class Rain {
    constructor() {
        this.image = new Image();
        this.image.src = './assets/img/rain/rain1.png';

        this.layers = [];
        for (let i = 0; i < 8; i++) {
            this.layers[i] = new Image();
            this.layers[i].src = `./assets/img/rain/rain${i+1}.png`;
        }

        this.frames = new Map([
            ['idle-1', this.layers[0]],
            ['idle-2', this.layers[1]],
            ['idle-3', this.layers[2]],
            ['idle-4', this.layers[3]],
            ['idle-5', this.layers[4]],
            ['idle-6', this.layers[5]],
            ['idle-7', this.layers[6]],
            ['idle-8', this.layers[7]],
        ]);

        this.animationFrame = 1;
        this.animationTimer = 0;
    }

    update(time) {
        if (time.previous > this.animationTimer + 60) {
            this.animationTimer = time.previous;

            this.animationFrame++;
            if (this.animationFrame > 8) this.animationFrame = 1;
        }
    }

    draw(context) {
        const src = this.frames.get(`idle-${this.animationFrame}`);
        this.image = src;

        context.drawImage(this.image, 0, 0);
    }
}
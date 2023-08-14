export class Shadow {
    constructor(model, config) {
        this.image = new Image();
        this.image.src = './assets/img/shadow/under_shadow.png';
        this.model = model;
        this.frame = [[0, 0, 128, 64], [62, 22]];

        this.config = config;
    }

    update() {

    }

    draw(context) {
        const [[x, y, width, height], [originX, originY]] = this.frame;

        context.globalAlpha = 0.5;
        context.drawImage(this.image, x, y, width, height, this.model.position.x - originX, this.config.FLOOR - originY, width, height);
        context.globalAlpha = 1;
    }
}
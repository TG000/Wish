export class End {
    constructor() {
        this.image = new Image();
        this.image.src = './assets/img/background/bg3.png';
    }

    update() {

    }

    draw(context) {
        context.drawImage(this.image, 0, 0);

        context.fillStyle = 'rgba(0, 0, 0, 0.7)';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
}
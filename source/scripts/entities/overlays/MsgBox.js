export class MsgBox {
    constructor() {
        this.box = { 
            x: 0,
            y: 0,
            xBg: 0,
            yBg: 0,
            width: 0,
            height: 0
        };
        this.msg;
        this.textStyle = 'transparent';
        this.backgroundStyle = 'transparent';
    }

    showMsg(xText, yText, xBg, yBg, width, height, msg) {
        this.box = {
            xText: xText,
            yText: yText,
            xBg: xBg,
            yBg: yBg,
            width: width,
            height: height
        };
        this.msg = msg;

        this.textStyle = 'white';
        this.backgroundStyle = 'rgba(0, 0, 0, 0.5)';
    }

    deleteMsg() {
        this.textStyle = 'transparent';
        this.backgroundStyle = 'transparent';
    }
    
    draw(context) {
        context.fillStyle = this.backgroundStyle;
        // context.beginPath();
        // context.roundRect(this.box.xBg, this.box.yBg, this.box.width, this.box.height, 10);
        // context.fill();
        context.fillRect(this.box.xBg, this.box.yBg, this.box.width, this.box.height);

        context.font = "30px Comic Sans MS";
        context.fillStyle = this.textStyle;
        context.textAlign = "center";
        context.fillText(this.msg, this.box.xText, this.box.yText);
    }
}
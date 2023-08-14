export function fillTextMultiLine(context, text, x, y) {
    var lineHeight = context.measureText("M").width * 2;
    var lines = text.split("\n");
    for (var i = 0; i < lines.length; ++i) {
      context.fillText(lines[i], x, y);
      y += lineHeight;
    }
}
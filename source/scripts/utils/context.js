export function getContext(canvas) {
    const context = canvas.getContext('2d');

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';

    return context;
}
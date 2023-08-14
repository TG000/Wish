export function rectsOverlap(x1, width1, x2, width2) {
    return x1 < x2 + width2 && x1 + width1 > x2;
}
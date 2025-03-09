import { Point } from "./point";
import { DrawCanvasWorker } from "./drawer-work";
import '../styles/index.scss';

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const drawWorker = new DrawCanvasWorker(ctx);

//   5 x 5 matrix
const matrix  = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0]
];

//generate random points
let points: Point[] = [];
for (let i = 0; i < matrix.length; i++) {
    points.push({
        x:  Math.random() * 600 + 50,
        y:  Math.random() * 600 + 50,
        label: String.fromCharCode(65 + i)
    });
}

points.forEach((point, index) => {
    drawWorker.drawPoint(point, "red", point.label);
});

for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
            drawWorker.drawLine(points[i], points[j], "blue");
        }
    }
}

const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("Webpack + Babel + TypeScript"));

import { Point } from "./point";
import { DrawCanvasWorker } from "./drawer-work";
import '../styles/index.scss';

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const inputMatrix = document.getElementById("matrix") as HTMLInputElement;
const buttonDraw = document.getElementById("draw") as HTMLButtonElement;

const drawWorker = new DrawCanvasWorker(ctx);

inputMatrix.value = JSON.stringify([
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]);

buttonDraw.addEventListener("click", () => {
    const matrix = JSON.parse(inputMatrix.value);
    drawWorker.clearCanvas();
    drawMatrix(matrix);
});

function drawMatrix(matrix: number[][]) {
    const points: Point[] = [];
    for (let i = 0; i < matrix.length; i++) {
        points.push({
            x: Math.random() * 600 + 50,
            y: Math.random() * 600 + 50,
            label: String.fromCharCode(65 + i)
        });
    }

    points.forEach((point, index) => {
        drawWorker.drawPoint(point, "red", point.label as string);
    });

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                drawWorker.drawLine(points[i], points[j], "blue");
            }
        }
    }
}


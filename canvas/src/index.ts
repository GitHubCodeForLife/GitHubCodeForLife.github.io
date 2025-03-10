import '../styles/index.scss';
import * as perfectFreehand from "perfect-freehand";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let points: any[] = [];

function getStrokeOptions() {
    return { size: 4, thinning: 0.7, smoothing: 0.5, streamline: 0.5 };
}

function drawStroke() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const stroke = perfectFreehand.getStroke(points, getStrokeOptions());

    ctx.beginPath();
    if (stroke.length > 0) {
        ctx.moveTo(stroke[0][0], stroke[0][1]);
        stroke.forEach(([x, y]) => ctx.lineTo(x, y));
    }
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
}

canvas.addEventListener("pointerdown", (e) => {
    isDrawing = true;
    points = [[e.clientX, e.clientY, e.pressure || 0.5]];
});

canvas.addEventListener("pointermove", (e) => {
    if (!isDrawing) return;
    points.push([e.clientX, e.clientY, e.pressure || 0.5]);
    drawStroke();
});

canvas.addEventListener("pointerup", () => {
    isDrawing = false;
    points = [];
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
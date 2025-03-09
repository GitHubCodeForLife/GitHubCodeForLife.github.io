import { Point } from "./point";

export class DrawCanvasWorker{
    ctx: CanvasRenderingContext2D;

    constructor(ctx : CanvasRenderingContext2D){
        this.ctx = ctx;
    }

    drawPoint(point: Point, color: string, label: string) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.fillStyle = "black";
        this.ctx.fillText(label, point.x + 10, point.y - 10);
    }
    drawLine(start: Point, end: Point, color: string) {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(start.x, start.y);
        this.ctx.lineTo(end.x, end.y);
        this.ctx.stroke();
    }
}
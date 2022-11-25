/*
Aufgabe: A08 Generative Kunst
Name: Alina Stumpf
Matrikel: 271137
Datum: 22.11.2022
Quellen: -
*/

namespace A08_GenerativeKunst {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let crc2Pattern: CanvasRenderingContext2D;
        let canvasPattern: HTMLCanvasElement = document.createElement("canvas");
        if (!canvasPattern)
            return;
        crc2Pattern = <CanvasRenderingContext2D>canvasPattern.getContext("2d");

        canvasPattern.width = 100;
        canvasPattern.height = 100;
        let randomRadius: number = Math.random() * 2;

        crc2Pattern.fillStyle = "#C4C7F4";
        crc2Pattern.fillRect(0, 0, canvasPattern.width, canvasPattern.height);
        crc2Pattern.arc(50, 50, 50, 0, randomRadius * Math.PI);
        crc2Pattern.stroke();

        let pattern: CanvasPattern = <CanvasPattern>crc2.createPattern(canvasPattern, "repeat");
        crc2.fillStyle = pattern;
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        drawArc();
        drawTriangles();
        drawRectangle();
        drawLines();

        let button: HTMLElement = <HTMLElement>document.querySelector("#button");
        button.addEventListener("click", handleLoad);
    }

    function drawArc(): void {
        for (let i: number = 0; i < 30; i++) {
            let x: number = Math.random() * 1000;
            let y: number = Math.random() * 500;
            let color: string[] = ["#48B3F5", "#31BCF5", "#28E4F5", "#7BE6F4", "#B1DCF5" ];
            let randomColor: string = color[Math.floor(Math.random() * color.length)];

            crc2.save();
            crc2.translate(x, y);

            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (600) + 1), Math.floor(Math.random() * (250) + 1), Math.floor(Math.random() * (80) + 1), 0, 2 * Math.PI);
            crc2.fillStyle = randomColor;
            crc2.fill();

            crc2.restore();
        }
    }

    function drawTriangles(): void {
        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * 1000;
            let y: number = Math.random() * 500;

            crc2.save();
            crc2.translate(x, y);

            crc2.beginPath();
            crc2.moveTo(50, 50);
            crc2.lineTo(100, 50);
            crc2.lineTo(75, 0);
            crc2.closePath();

            crc2.fillStyle = "#F5F1D5";
            crc2.fill();

            crc2.restore();
        }
    }

    function drawRectangle(): void {
        for (let i: number = 0; i < 30; i++) {
            let x: number = Math.random() * 1000;
            let y: number = Math.random() * 500;

            crc2.save();
            crc2.translate(x, y);

            crc2.beginPath();
            crc2.rect(10, 10, 50, 30);

            crc2.fillStyle = "#F5ACAC";
            crc2.fill();

            crc2.restore();
        }
    }

    function drawLines(): void {
        for (let i: number = 0; i < 30; i++) {
            let x: number = Math.random() * 1000;
            let y: number = Math.random() * 800;

            crc2.save();
            crc2.translate(x, y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(80, 80);
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(80, 0);
            crc2.lineTo(0, 80);
            crc2.lineWidth = 3;
            crc2.stroke();

            crc2.restore();
        }
    }
}

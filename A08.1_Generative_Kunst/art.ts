namespace L08GenerativeKunst{


// Quelle: https://kernhanda.github.io/tutorial-typescript-canvas-drawing/

// When page loads trigger function handleLoad
window.addEventListener("load", handleLoad);

// Declare new variables
let crc2: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement

function handleLoad(): void {

    // Get Canvas-Element from DOM
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;

    // Background-Color Canvas
    crc2.fillStyle = "#B1ECEE";
    crc2.fillRect(150, 50, crc2.canvas.width, crc2.canvas.height);

    crc2.translate(150, 50);

    // Call other functions
    drawCircle();
    drawElipse();
    drawLine();
}

function drawCircle(): void{

    // Circle size varies from min to max
    let size: number = randomNumber(1, 150);
    let circle: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

    // Give Circle Color 
    circle.fillStyle = "#1F686A";
    circle.strokeStyle = "#1F686A";

    // Randomize Circle-Size
    for (let i: number = 0; i <10; i++) {
        let x: number = Math.random() * circle.canvas.width;
        let y: number = Math.random() * circle.canvas.height;

        // Source-Inspo: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
        circle.beginPath();
        circle.arc(x,y,size, 0, 2 * Math.PI);
        circle.fill();
        circle.closePath();
        circle.stroke();
    }

}

function drawElipse(): void{

    // Elipse
    let size: number = randomNumber(1, 150);
    let elipse: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

    // Give Elipse a color
    elipse.fillStyle = "#DBE023";
    elipse.strokeStyle = "#DBE023";

    // Randomize Elipse-Sizes
    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * elipse.canvas.width;
        let y: number = Math.random() * elipse.canvas.height;

        // Source-Inspo https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
        elipse.beginPath();
        elipse.ellipse(x, y, size, 15, 5, 0, 360);
        elipse.fill();
        elipse.closePath();
        elipse.stroke();
    }
}

function drawLine(): void {

    // Give Lines a color
    let color: string[] = ["#BB1818", "#9C0CE0", "#14982E"];

    //Randomize Line-Sizes
    for(let i: number = 0; i < color.length; i++) {
        for (let index: number = 0; index < 50; index++) {
            let a: number = randomNumber(0, canvas.width);
            let b: number = randomNumber(0, canvas.height);
            let c: number = randomNumber(0, canvas.width);
            let d: number = randomNumber(0, canvas.height);
            
            // Source: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo
            crc2.beginPath();
            crc2.moveTo(a, b);
            crc2.lineTo(c, d);
            crc2.stroke();
            crc2.strokeStyle = color[i];
        }

    }

}

function randomNumber(min: number, max: number): number {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

}
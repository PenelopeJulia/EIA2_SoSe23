namespace L08Luftfahrt {

    //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

window.addEventListener("load", handleLoad);

interface Vector {
    x: number;
    y: number;
}

let horizon: number = 0.6;

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

function handleLoad(): void {

    // Create Background
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(horizon, "lightgrey");
    gradient.addColorStop(1,"#C7F9CD");

    // Fill Canvas with Background
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    // Mountains Positioning in Canvas
    let startMountain: number = crc2.canvas.height * horizon;
    let posMountain: Vector = { x: 0, y: startMountain };

    // Call Functions to create Art-Items
    drawSun({x: 650, y: 75});

    drawCloud({x: 225, y: 150}, {x: 325, y: 100});

    drawMountain(posMountain, 100, 200, "grey", "white");

    drawTree({x: 100, y: 500}, - 200);
    drawTree({x: 300, y: 420}, - 200);
    drawTree({x: 700, y: 400}, - 200);

    drawHouse({x: 200, y: 500});

    drawZone({x: 600, y: 460});

    drawParachutePerson({x: 100, y: 100});
    drawParachutePerson({x: 200, y: 100});
    drawParachutePerson({x: 200, y: 500});

    drawPerson({x: 100, y: 500});

}

// Draw Sun 
function drawSun(_position: Vector): void {

    let sun: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    // Radius from Circles
    let r1: number = 25;
    let r2: number = 150;

    // Gradient: to create feathering effect
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

    gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
    gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

    sun.save();
    sun.translate(_position.x, _position.y);
    sun.fillStyle = gradient;
    sun.arc(0, 0, r2, 0, 2 * Math.PI);
    sun.fill();
    sun.restore();

}

// Draw Cloud
function drawCloud(_position: Vector, _size: Vector): void {

    let cloud: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


    let nParicles: number = 20;
    let radiusParticle: number = 50;
    let particle: Path2D = new Path2D();
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);


    // Give Cloud (Arcs) a color and let it feather out with a gradient
    particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
    gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
    gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

    // Position Cloud
    cloud.save();
    cloud.translate(_position.x, _position.y);
    cloud.fillStyle = gradient;

    // Size Cloud randomly
    for (let drawn: number = 0; drawn < nParicles; drawn++) {
        cloud.save();

        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = -(Math.random() * _size.y);

        cloud.translate(x, y);
        cloud.fill(particle);
        cloud.restore();
    }
    cloud.restore();

}

// Draw Mountains
function drawMountain(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {

    let mountainLine: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    // Minimum and Maximum Height
    let stepMin: number = 100;
    let stepMax: number = 200;
    let x: number = 0;

    mountainLine.save();
    mountainLine.translate(_position.x, _position.y);

    // Mountain Path
    mountainLine.beginPath();
    mountainLine.moveTo(0, 0);
    mountainLine.lineTo(0, - _max);

    // Randomize Mountain Height
    do {
        x += stepMin + Math.random() * (stepMax - stepMin);
        let y: number = - _min - Math.random() * (_max - _min);

        mountainLine.lineTo(x, y);
    } while (x < mountainLine.canvas.width);

    mountainLine.lineTo(x, 0);
    mountainLine.closePath();

    // Stylize Color with a Gradient
    let gradient: CanvasGradient = mountainLine.createLinearGradient(0, 0, 0, -_max);
    gradient.addColorStop(0, _colorLow);
    gradient.addColorStop(1, _colorHigh);

    mountainLine.fillStyle = gradient;
    mountainLine.fill();

    mountainLine.restore();
}

// Create LandingZone
function drawZone(_position: Vector): void {

    let zone: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

     zone.beginPath();
     zone.fillStyle = "#1874CD";
     zone.ellipse(600, 490, 200, 90, 0, 0, 360);
     zone.fill();
}

// Draw Trees
function drawTree(_position: Vector, _max: number): void {

    let tree: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    // Tree Trunk
    tree.beginPath();
    tree.fillStyle = "#5B3A29";
    tree.fillRect(_position.x - 25, _position.y - 10, 50, -30);
    tree.closePath();

    // Tree Top
    tree.beginPath();
    // Circle
    tree.arc(_position.x, _position.y - 100, 70, 0, 2 * Math.PI);
    tree.fillStyle = "#26392F";
    tree.fill();
    tree.closePath();

}


function drawHouse(_position: Vector): void {

    let house: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    // Stylize House with Color
    house.fillStyle = "#563d2d";
    house.strokeStyle = "#563d2d";

    //Create Shape
    house.beginPath();
    house.rect(_position.x, _position.y, 100, 50)
    house.moveTo(200, 500);
    house.lineTo(250, 450);
    house.lineTo(300, 500);
    house.fill();
    house.closePath();
    house.stroke();
   
    
}

function drawPerson(_position: Vector): void {

    let person: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    // Create Person
    person.beginPath();
    person.fillStyle = "#40b90a";
    person.fillRect(600, 470, 10, 25);
    person.fill();
    person.beginPath();
    person.fillStyle = "#d4a985";
    person.arc(605, 465, 9, 0, 2 * Math.PI);
    person.fill();
}

function drawParachutePerson(_position: Vector): void {

    let personParachute: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    // Create People 
     personParachute.beginPath();
     personParachute.fillStyle = "#40b90a";
     personParachute.fillRect(410, 255, 10, 25);
     personParachute.fill();
     personParachute.beginPath();
     personParachute.fillStyle = "#d4a985";
     personParachute.arc(415, 250, 9, 0, 2 * Math.PI);
     personParachute.fill();
     
     // Parachute
     personParachute.beginPath();
     personParachute.fillStyle = "#483D8B";
     personParachute.ellipse(415, 220, 40, 20, 3, 0, 360);
     personParachute.fill();


}



}





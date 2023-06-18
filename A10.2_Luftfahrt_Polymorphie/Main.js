"use strict";
var A10LuftfahrtPolymorphie;
(function (A10LuftfahrtPolymorphie) {
    //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    window.addEventListener("load", handleLoad);
    // New Variables
    let horizon = 0.6;
    // Background of Type ImageData
    let background;
    // Array
    let moveObjects = [];
    function handleLoad() {
        A10LuftfahrtPolymorphie.canvas = document.querySelector("canvas");
        A10LuftfahrtPolymorphie.crc2 = A10LuftfahrtPolymorphie.canvas.getContext("2d");
        // Call Functions 
        drawBackground();
        createMoveObjects();
        setInterval(update, 20);
    }
    function createMoveObjects() {
        // Go through Array Paraglider with a minimum of 13 Paragliders depicted on canvas
        for (let iParaglider = 0; iParaglider < 13; iParaglider++) {
            let paraglider = new A10LuftfahrtPolymorphie.Paraglider();
            // Push locally declared paraglider from Array Paraglider into globally declared Variable paragliders
            moveObjects.push(paraglider);
        }
        // Same thing just with the People on Earth
        for (let iPerson = 0; iPerson < 2; iPerson++) {
            let person = new A10LuftfahrtPolymorphie.Person("brown");
            moveObjects.push(person);
        }
    }
    function update() {
        // Put Background on Canvas
        A10LuftfahrtPolymorphie.crc2.putImageData(background, 0, 0);
        console.log("update");
        for (let person of moveObjects) {
            person.drawPerson();
            person.movePerson(1 / 1000);
        }
        for (let paraglider of moveObjects) {
            paraglider.drawParachute();
            paraglider.moveParachute(1 / 1000);
        }
    }
    function drawBackground() {
        // Create Background
        let gradient = A10LuftfahrtPolymorphie.crc2.createLinearGradient(0, 0, 0, A10LuftfahrtPolymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(horizon, "lightgrey");
        gradient.addColorStop(1, "#C7F9CD");
        // Fill Canvas with Background
        A10LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        A10LuftfahrtPolymorphie.crc2.fillRect(0, 0, A10LuftfahrtPolymorphie.crc2.canvas.width, A10LuftfahrtPolymorphie.crc2.canvas.height);
        // Mountains Positioning in Canvas
        let startMountain = A10LuftfahrtPolymorphie.crc2.canvas.height * horizon;
        let posMountain = { x: 0, y: startMountain };
        // Call Functions to create Art-Items
        drawSun({ x: 650, y: 75 });
        drawCloud({ x: 225, y: 150 }, { x: 325, y: 100 });
        drawMountain(posMountain, 100, 200, "grey", "white");
        drawTree({ x: 100, y: 500 }, -200);
        drawTree({ x: 300, y: 420 }, -200);
        drawTree({ x: 700, y: 400 }, -200);
        drawHouse({ x: 200, y: 500 });
        drawZone({ x: 600, y: 460 });
        background = A10LuftfahrtPolymorphie.crc2.getImageData(0, 0, A10LuftfahrtPolymorphie.crc2.canvas.width, A10LuftfahrtPolymorphie.crc2.canvas.height);
    }
    // Draw Sun 
    function drawSun(_position) {
        let sun = A10LuftfahrtPolymorphie.canvas.getContext("2d");
        // Radius from Circles
        let r1 = 25;
        let r2 = 150;
        // Gradient: to create feathering effect
        let gradient = A10LuftfahrtPolymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
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
    function drawCloud(_position, _size) {
        let cloud = A10LuftfahrtPolymorphie.canvas.getContext("2d");
        let nParicles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = A10LuftfahrtPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        // Give Cloud (Arcs) a color and let it feather out with a gradient
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        // Position Cloud
        cloud.save();
        cloud.translate(_position.x, _position.y);
        cloud.fillStyle = gradient;
        // Size Cloud randomly
        for (let drawn = 0; drawn < nParicles; drawn++) {
            cloud.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            cloud.translate(x, y);
            cloud.fill(particle);
            cloud.restore();
        }
        cloud.restore();
    }
    // Draw Mountains
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        let mountainLine = A10LuftfahrtPolymorphie.canvas.getContext("2d");
        // Minimum and Maximum Height
        let stepMin = 100;
        let stepMax = 200;
        let x = 0;
        mountainLine.save();
        mountainLine.translate(_position.x, _position.y);
        // Mountain Path
        mountainLine.beginPath();
        mountainLine.moveTo(0, 0);
        mountainLine.lineTo(0, -_max);
        // Randomize Mountain Height
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            mountainLine.lineTo(x, y);
        } while (x < mountainLine.canvas.width);
        mountainLine.lineTo(x, 0);
        mountainLine.closePath();
        // Stylize Color with a Gradient
        let gradient = mountainLine.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);
        mountainLine.fillStyle = gradient;
        mountainLine.fill();
        mountainLine.restore();
    }
    // Create LandingZone
    function drawZone(_position) {
        let zone = A10LuftfahrtPolymorphie.canvas.getContext("2d");
        zone.beginPath();
        zone.fillStyle = "#1874CD";
        zone.ellipse(600, 490, 200, 90, 0, 0, 360);
        zone.fill();
    }
    // Draw Trees
    function drawTree(_position, _max) {
        let tree = A10LuftfahrtPolymorphie.canvas.getContext("2d");
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
    function drawHouse(_position) {
        let house = A10LuftfahrtPolymorphie.canvas.getContext("2d");
        // Stylize House with Color
        house.fillStyle = "#563d2d";
        house.strokeStyle = "#563d2d";
        //Create Shape
        house.beginPath();
        house.rect(_position.x, _position.y, 100, 50);
        house.moveTo(200, 500);
        house.lineTo(250, 450);
        house.lineTo(300, 500);
        house.fill();
        house.closePath();
        house.stroke();
    }
})(A10LuftfahrtPolymorphie || (A10LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Main.js.map
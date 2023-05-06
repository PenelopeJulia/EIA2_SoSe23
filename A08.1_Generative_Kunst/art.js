"use strict";
var L08GenerativeKunst;
(function (L08GenerativeKunst) {
    // Quelle: https://kernhanda.github.io/tutorial-typescript-canvas-drawing/
    // When page loads trigger function handleLoad
    window.addEventListener("load", handleLoad);
    // Declare new variables
    let crc2;
    let canvas;
    function handleLoad() {
        // Get Canvas-Element from DOM
        canvas = document.getElementById('canvas');
        crc2 = canvas.getContext("2d");
        // Background-Color Canvas
        crc2.fillStyle = "#B1ECEE";
        crc2.fillRect(150, 50, crc2.canvas.width, crc2.canvas.height);
        crc2.translate(150, 50);
        // Call other functions
        drawCircle();
        drawElipse();
        drawLine();
    }
    function drawCircle() {
        // Circle size varies from min to max
        let size = randomNumber(1, 150);
        let circle = canvas.getContext("2d");
        // Give Circle Color 
        circle.fillStyle = "#1F686A";
        circle.strokeStyle = "#1F686A";
        // Randomize Circle-Size
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * circle.canvas.width;
            let y = Math.random() * circle.canvas.height;
            // Source-Inspo: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
            circle.beginPath();
            circle.arc(x, y, size, 0, 2 * Math.PI);
            circle.fill();
            circle.closePath();
            circle.stroke();
        }
    }
    function drawElipse() {
        // Elipse
        let size = randomNumber(1, 150);
        let elipse = canvas.getContext("2d");
        // Give Elipse a color
        elipse.fillStyle = "#DBE023";
        elipse.strokeStyle = "#DBE023";
        // Randomize Elipse-Sizes
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * elipse.canvas.width;
            let y = Math.random() * elipse.canvas.height;
            // Source-Inspo https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
            elipse.beginPath();
            elipse.ellipse(x, y, size, 15, 5, 0, 360);
            elipse.fill();
            elipse.closePath();
            elipse.stroke();
        }
    }
    function drawLine() {
        // Give Lines a color
        let color = ["#BB1818", "#9C0CE0", "#14982E"];
        //Randomize Line-Sizes
        for (let i = 0; i < color.length; i++) {
            for (let index = 0; index < 50; index++) {
                let a = randomNumber(0, canvas.width);
                let b = randomNumber(0, canvas.height);
                let c = randomNumber(0, canvas.width);
                let d = randomNumber(0, canvas.height);
                // Source: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo
                crc2.beginPath();
                crc2.moveTo(a, b);
                crc2.lineTo(c, d);
                crc2.stroke();
                crc2.strokeStyle = color[i];
            }
        }
    }
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
})(L08GenerativeKunst || (L08GenerativeKunst = {}));
//# sourceMappingURL=art.js.map
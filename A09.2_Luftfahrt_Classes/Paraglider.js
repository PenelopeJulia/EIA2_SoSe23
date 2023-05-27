"use strict";
var A09LuftfahrtClasses;
(function (A09LuftfahrtClasses) {
    class Paraglider {
        position;
        velocity;
        type;
        color;
        constructor() {
            this.position = new A09LuftfahrtClasses.Vector(0, 0);
            this.velocity = new A09LuftfahrtClasses.Vector(0, 0);
        }
        animateParachute(_timeslice) {
            console.log("scale");
            let offset = new A09LuftfahrtClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A09LuftfahrtClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A09LuftfahrtClasses.crc2.canvas.height;
            if (this.position.x > A09LuftfahrtClasses.crc2.canvas.width)
                this.position.x -= A09LuftfahrtClasses.crc2.canvas.width;
            if (this.position.y > 500)
                this.position.y -= A09LuftfahrtClasses.crc2.canvas.height;
        }
        drawParachute() {
            // Randomize Color
            let colorBody = Math.floor(Math.random() * 360);
            let saturationBody = Math.floor(Math.random() * 50) + 70;
            let lightnessBody = Math.floor(Math.random() * 40) + 20;
            let colorParachute = Math.floor(Math.random() * 360);
            let saturationParachute = Math.floor(Math.random() * 50) + 70;
            let lightnessParachute = Math.floor(Math.random() * 40) + 20;
            // Create People 
            A09LuftfahrtClasses.crc2.beginPath();
            A09LuftfahrtClasses.crc2.fillStyle = "hsl(" + colorBody + ", " + saturationBody + "%, " + lightnessBody + "%)";
            A09LuftfahrtClasses.crc2.fillRect(this.position.x, this.position.y + 30, 10, 25);
            A09LuftfahrtClasses.crc2.fill();
            A09LuftfahrtClasses.crc2.beginPath();
            // Head
            A09LuftfahrtClasses.crc2.fillStyle = "#d4a985";
            A09LuftfahrtClasses.crc2.arc(this.position.x + 5, this.position.y + 25, 9, 0, 2 * Math.PI);
            A09LuftfahrtClasses.crc2.fill();
            // Parachute
            A09LuftfahrtClasses.crc2.beginPath();
            A09LuftfahrtClasses.crc2.fillStyle = "hsl(" + colorParachute + ", " + saturationParachute + "%, " + lightnessParachute + "%)";
            A09LuftfahrtClasses.crc2.arc(this.position.x + 5, this.position.y - 25, 40, 0, 2 * Math.PI);
            A09LuftfahrtClasses.crc2.fill();
        }
    }
    A09LuftfahrtClasses.Paraglider = Paraglider;
})(A09LuftfahrtClasses || (A09LuftfahrtClasses = {}));
//# sourceMappingURL=Paraglider.js.map
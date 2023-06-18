"use strict";
var A10LuftfahrtPolymorphie;
(function (A10LuftfahrtPolymorphie) {
    class Paraglider extends A10LuftfahrtPolymorphie.Moveable {
        // Animate Paraglider with 
        moveParachute(_timeslice) {
            console.log("scale");
            let offset = new A10LuftfahrtPolymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A10LuftfahrtPolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10LuftfahrtPolymorphie.crc2.canvas.height;
            if (this.position.x > A10LuftfahrtPolymorphie.crc2.canvas.width)
                this.position.x -= A10LuftfahrtPolymorphie.crc2.canvas.width;
            if (this.position.y > 500)
                this.position.y -= A10LuftfahrtPolymorphie.crc2.canvas.height;
        }
        // Draw Paralider
        drawParachute() {
            let colorBody = Math.floor(Math.random() * 360);
            let saturationBody = Math.floor(Math.random() * 50) + 70;
            let lightnessBody = Math.floor(Math.random() * 40) + 20;
            let colorParachute = Math.floor(Math.random() * 360);
            let saturationParachute = Math.floor(Math.random() * 50) + 70;
            let lightnessParachute = Math.floor(Math.random() * 40) + 20;
            A10LuftfahrtPolymorphie.crc2.beginPath();
            A10LuftfahrtPolymorphie.crc2.fillStyle = "hsl(" + colorBody + ", " + saturationBody + "%, " + lightnessBody + "%)";
            A10LuftfahrtPolymorphie.crc2.fillRect(this.position.x, this.position.y + 30, 10, 25);
            A10LuftfahrtPolymorphie.crc2.fill();
            A10LuftfahrtPolymorphie.crc2.beginPath();
            A10LuftfahrtPolymorphie.crc2.fillStyle = "#d4a985";
            A10LuftfahrtPolymorphie.crc2.arc(this.position.x + 5, this.position.y + 25, 9, 0, 2 * Math.PI);
            A10LuftfahrtPolymorphie.crc2.fill();
            A10LuftfahrtPolymorphie.crc2.beginPath();
            A10LuftfahrtPolymorphie.crc2.fillStyle = "hsl(" + colorParachute + ", " + saturationParachute + "%, " + lightnessParachute + "%)";
            A10LuftfahrtPolymorphie.crc2.arc(this.position.x + 5, this.position.y - 25, 40, 0, 2 * Math.PI);
            A10LuftfahrtPolymorphie.crc2.fill();
        }
    }
    A10LuftfahrtPolymorphie.Paraglider = Paraglider;
})(A10LuftfahrtPolymorphie || (A10LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Paraglider.js.map
"use strict";
var A10LuftfahrtPolymorphie;
(function (A10LuftfahrtPolymorphie) {
    class Person extends A10LuftfahrtPolymorphie.Moveable {
        type;
        color;
        constructor(_color) {
            super();
            this.color = _color;
        }
        // Animate Position of Person
        movePerson(_timeslice) {
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
        // Draw Person
        drawPerson() {
            let person = A10LuftfahrtPolymorphie.canvas.getContext("2d");
            console.log("draw");
            person.save();
            // Create Person
            person.beginPath();
            person.fillStyle = "#40b90a";
            person.fillRect(350, 480, 10, 25);
            person.fill();
            person.beginPath();
            person.fillStyle = "#d4a985";
            person.arc(355, 475, 9, 0, 2 * Math.PI);
            person.fill();
            person.restore();
        }
    }
    A10LuftfahrtPolymorphie.Person = Person;
})(A10LuftfahrtPolymorphie || (A10LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Person.js.map
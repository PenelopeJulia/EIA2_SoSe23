"use strict";
var A09LuftfahrtClasses;
(function (A09LuftfahrtClasses) {
    class Person {
        position;
        velocity;
        type;
        color;
        constructor(_color) {
            this.position = new A09LuftfahrtClasses.Vector(0, 0);
            this.velocity = new A09LuftfahrtClasses.Vector(0, 0);
            this.color = _color;
        }
        // Animate Position of Person
        animatePerson(_timeslice) {
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
        // Draw Person
        drawPerson() {
            let person = A09LuftfahrtClasses.canvas.getContext("2d");
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
    A09LuftfahrtClasses.Person = Person;
})(A09LuftfahrtClasses || (A09LuftfahrtClasses = {}));
//# sourceMappingURL=Person.js.map
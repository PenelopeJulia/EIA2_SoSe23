"use strict";
var A09LuftfahrtClasses;
(function (A09LuftfahrtClasses) {
    class Person {
        position;
        velocity;
        type;
        random;
        constructor(_random) {
            this.position = new A09LuftfahrtClasses.Vector(0, 0);
            this.velocity = new A09LuftfahrtClasses.Vector(0, 0);
            this.velocity.random(300, 200);
            this.random = _random;
        }
        drawPerson() {
            let person = A09LuftfahrtClasses.canvas.getContext("2d");
            let scale = ((person.canvas.width * 2) / 1000);
            console.log("draw");
            person.save();
            person.translate(this.position.x, this.random);
            person.scale(scale, scale);
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
        animatePerson(_timeslice) {
            let offset = new A09LuftfahrtClasses.Vector(this.velocity.x, -70);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A09LuftfahrtClasses.crc2.canvas.width;
            if (this.position.x > A09LuftfahrtClasses.crc2.canvas.width)
                this.position.x -= A09LuftfahrtClasses.crc2.canvas.width;
        }
    }
    A09LuftfahrtClasses.Person = Person;
})(A09LuftfahrtClasses || (A09LuftfahrtClasses = {}));
//# sourceMappingURL=Person.js.map
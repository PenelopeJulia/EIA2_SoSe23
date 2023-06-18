"use strict";
var A10LuftfahrtPolymorphie;
(function (A10LuftfahrtPolymorphie) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new A10LuftfahrtPolymorphie.Vector(0, 0);
            }
            this.velocity = new A10LuftfahrtPolymorphie.Vector(0, 0);
        }
        moveParachute(_timeslice) { }
        ;
        movePerson(_timeslice) { }
        ;
        drawParachute() { }
        ;
        drawPerson() { }
        ;
    }
    A10LuftfahrtPolymorphie.Moveable = Moveable;
})(A10LuftfahrtPolymorphie || (A10LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Moveable.js.map
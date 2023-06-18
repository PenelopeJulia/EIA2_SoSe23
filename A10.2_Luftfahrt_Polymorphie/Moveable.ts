namespace A10LuftfahrtPolymorphie {

    export class Moveable {

        position: Vector;
        velocity: Vector;


        constructor(_position?: Vector) {

            if (_position) {
                this.position = _position;
            }

            else {
                this.position = new Vector(0, 0);
            }


            this.velocity = new Vector (0, 0);
        }

        moveParachute(_timeslice: number): void { };
        movePerson(_timeslice: number): void { };
        drawParachute(): void { };
        drawPerson(): void { };


    }


}
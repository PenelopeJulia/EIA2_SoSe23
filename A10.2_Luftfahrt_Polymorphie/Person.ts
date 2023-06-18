namespace A10LuftfahrtPolymorphie {

        export class Person extends Moveable {
        
        
            type: string;
            color: string;
 

            constructor(_color: string) {
            super()
            this.color = _color;
        
            }

            // Animate Position of Person
            movePerson (_timeslice: number):void {
                console.log("scale");

                let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
            
            
                if (this.position.x < 0)
                    this.position.x += crc2.canvas.width;
                if (this.position.y < 0)
                    this.position.y += crc2.canvas.height;
                if (this.position.x > crc2.canvas.width)
                    this.position.x -= crc2.canvas.width;
                if (this.position.y > 500)
                    this.position.y -= crc2.canvas.height;
                }
         

            // Draw Person
            drawPerson(): void {
        

                let person: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

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
 
    }   







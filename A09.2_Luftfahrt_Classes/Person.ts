namespace A09LuftfahrtClasses {

        export class Person {
        
            position: Vector;
            velocity: Vector;
            type: number;
            random: number;
           
         
        
            constructor(_random: number) {
                this.position = new Vector(0, 0);
                this.velocity = new Vector(0, 0);  
                this.velocity.random(300, 200);  
                this.random = _random;
        
            }

            drawPerson(): void {
        

                let person: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
                let scale: number = ((person.canvas.width*2)/1000);

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
        
            animatePerson(_timeslice: number): void {
        
            let offset: Vector = new Vector(this.velocity.x, -70);
            offset.scale(_timeslice);
            this.position.add(offset);
        
        
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
    
            }
        
        
        }
 }
        







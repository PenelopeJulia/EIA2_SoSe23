namespace A10LuftfahrtPolymorphie {

export class Paraglider extends Moveable {

    // Animate Paraglider with 
    moveParachute(_timeslice: number): void {

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

    // Draw Paralider
    drawParachute(): void {

    let colorBody = Math.floor(Math.random() * 360);
    let saturationBody = Math.floor(Math.random() * 50) + 70;
    let lightnessBody = Math.floor(Math.random() * 40) + 20;

    let colorParachute = Math.floor(Math.random() * 360);
    let saturationParachute = Math.floor(Math.random() * 50) + 70;
    let lightnessParachute = Math.floor(Math.random() * 40) + 20;

     crc2.beginPath();
     crc2.fillStyle =  "hsl(" + colorBody + ", " + saturationBody + "%, " + lightnessBody + "%)";
     crc2.fillRect(this.position.x, this.position.y + 30, 10, 25);
     crc2.fill();
     crc2.beginPath();

     crc2.fillStyle = "#d4a985";
     crc2.arc(this.position.x + 5, this.position.y + 25, 9, 0, 2 * Math.PI);
     crc2.fill();
     
     crc2.beginPath();
     crc2.fillStyle = "hsl(" + colorParachute + ", " + saturationParachute + "%, " + lightnessParachute + "%)";
     crc2.arc(this.position.x + 5, this.position.y - 25, 40, 0, 2 * Math.PI);
     crc2.fill();


    }

}

}
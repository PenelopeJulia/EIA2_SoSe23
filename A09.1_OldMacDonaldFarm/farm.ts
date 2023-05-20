namespace A09OldMacDonaldFarm {

    window.addEventListener("load", handleLoad);

    // Farm Animals (Name, Animal, Food, Amount, Noise ...)
    let horse: Animals = new Animals("Tommy", "Horse", "Grass", 40, "Neigh", 2);
    let pig: Animals = new Animals("Magda", "Pig", "Corn", 40, "Oink", 4);
    let dog: Animals = new Animals("Titus", "Dog", "Meat", 20, "Woof", 1);
    let cow: Animals = new Animals("Mathilda", "Cow", "Hay", 40, "Moo", 3);
    let cat: Animals = new Animals("Mirinda", "Cat", "Meat", 15, "Miau", 0.5);


    // Create Array that will contain Animals
    let stable: Animals[] = [];

    // Push Animals with their properties into Stable-Array
    stable.push(horse);
    stable.push(pig);
    stable.push(dog);
    stable.push(cow);
    stable.push(cat);



    // Create Divs
    let foodDiv: HTMLElement;
    let animalDiv: HTMLElement;
    let songDiv: HTMLElement;


    // When page loads this function is triggered
    function handleLoad(): void {

        //Get Divs from DOM
        foodDiv = <HTMLElement>document.getElementById("food");
        animalDiv = <HTMLElement>document.getElementById("animals");
        songDiv = <HTMLElement>document.getElementById("song");


        // Food Amount
        foodDiv.innerHTML = horse.amountFood + "kg " + horse.food + ", " + pig.amountFood + "kg " + pig.food + ", " + dog.amountFood + "kg " + dog.food + ", " + cow.amountFood + "kg " + cow.food + ", " + cat.amountFood + "kg " + cat.food;
        // Start of Song
        songDiv.innerHTML = "Old Mac Donald had a Farm, EIEIO";

        // After set Time trigger Function setTime and generate song
        setTimeout(setTime, 200);

    }


    function setTime(): void {

        // For Loop that counts though Stable-Array
        for (let i: number = 0; i <= stable.length - 1; i++) {

            // Call Sing-Method and Value from Array then stored in singSong
            let singSong: string = stable[i].sing();

            // Manipulate DOM with innerHTMl to append singSong to specific DIV
            animalDiv.innerHTML += singSong + "<br>";
            // Food taht Animal has eaten
            foodDiv.innerHTML = horse.eat() + "kg " + horse.food + ", " + pig.eat() + "kg " + pig.food + ", " + dog.eat() + "kg " + dog.food + ", " + cow.eat() + "kg " + cow.food + ", " + cat.eat() + "kg " + cat.food;


        }
    }

}
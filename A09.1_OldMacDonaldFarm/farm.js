"use strict";
var A09OldMacDonaldFarm;
(function (A09OldMacDonaldFarm) {
    window.addEventListener("load", handleLoad);
    // Farm Animals (Name, Animal, Food, Amount, Noise ...)
    let horse = new A09OldMacDonaldFarm.Animals("Tommy", "Horse", "Grass", 40, "Neigh", 2);
    let pig = new A09OldMacDonaldFarm.Animals("Magda", "Pig", "Corn", 40, "Oink", 4);
    let dog = new A09OldMacDonaldFarm.Animals("Titus", "Dog", "Meat", 20, "Woof", 1);
    let cow = new A09OldMacDonaldFarm.Animals("Mathilda", "Cow", "Hay", 40, "Moo", 3);
    let cat = new A09OldMacDonaldFarm.Animals("Mirinda", "Cat", "Meat", 15, "Miau", 0.5);
    // Create Array that will contain Animals
    let stable = [];
    // Push Animals with their properties into Stable-Array
    stable.push(horse);
    stable.push(pig);
    stable.push(dog);
    stable.push(cow);
    stable.push(cat);
    // Create Divs
    let foodDiv;
    let animalDiv;
    let songDiv;
    // When page loads this function is triggered
    function handleLoad() {
        //Get Divs from DOM
        foodDiv = document.getElementById("food");
        animalDiv = document.getElementById("animals");
        songDiv = document.getElementById("song");
        // Food Amount
        foodDiv.innerHTML = horse.amountFood + "kg " + horse.food + ", " + pig.amountFood + "kg " + pig.food + ", " + dog.amountFood + "kg " + dog.food + ", " + cow.amountFood + "kg " + cow.food + ", " + cat.amountFood + "kg " + cat.food;
        // Start of Song
        songDiv.innerHTML = "Old Mac Donald had a Farm, EIEIO";
        // After set Time trigger Function setTime and generate song
        setTimeout(setTime, 200);
    }
    function setTime() {
        // For Loop that counts though Stable-Array
        for (let i = 0; i <= stable.length - 1; i++) {
            // Call Sing-Method and Value from Array then stored in singSong
            let singSong = stable[i].sing();
            // Manipulate DOM with innerHTMl to append singSong to specific DIV
            animalDiv.innerHTML += singSong + "<br>";
            // Food taht Animal has eaten
            foodDiv.innerHTML = horse.eat() + "kg " + horse.food + ", " + pig.eat() + "kg " + pig.food + ", " + dog.eat() + "kg " + dog.food + ", " + cow.eat() + "kg " + cow.food + ", " + cat.eat() + "kg " + cat.food;
        }
    }
})(A09OldMacDonaldFarm || (A09OldMacDonaldFarm = {}));
//# sourceMappingURL=farm.js.map
"use strict";
var A09OldMacDonaldFarm;
(function (A09OldMacDonaldFarm) {
    // Object Animals
    class Animals {
        name;
        species;
        food;
        amountFood;
        sounds;
        lyric;
        eaten;
        // Initialize Porperties of Object
        constructor(_name, _species, _food, _amountFood, _sounds, _eaten) {
            //Assign Values to Animal Properties from object through Parameters
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.amountFood = _amountFood;
            this.sounds = _sounds;
            this.eaten = _eaten;
            // Create Lyrics for Song
            this.lyric = "And on that Farm he had a " + this.species + " EIEIO <br>" + " And on his farm he had a " + this.species + " called " + this.name + " that sang " + this.sounds + " and ate " + this.eaten + " kg of " + this.food + ".<br>";
        }
        // Lyrics
        sing() {
            console.log(this.lyric);
            return this.lyric;
        }
        // Leftover Food 
        eat() {
            let update = this.amountFood - this.eaten;
            return update.toString();
        }
    }
    A09OldMacDonaldFarm.Animals = Animals;
})(A09OldMacDonaldFarm || (A09OldMacDonaldFarm = {}));
//# sourceMappingURL=animals.js.map
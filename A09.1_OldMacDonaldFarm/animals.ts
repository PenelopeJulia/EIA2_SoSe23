namespace A09OldMacDonaldFarm {

    // Object Animals
    export class Animals {
        name: string;
        species: string;
        food: string;
        amountFood: number;
        sounds: string;
        lyric: string;
        eaten: number;
    

            // Initialize Porperties of Object
            constructor(_name: string, _species: string, _food: string, _amountFood: number, _sounds: string, _eaten: number) {

                //Assign Values to Animal Properties from object through Parameters
                    this.name = _name;
                    this.species = _species;
                    this.food = _food;
                    this.amountFood = _amountFood;
                    this.sounds = _sounds;
                    this.eaten = _eaten;
                    // Create Lyrics for Song
                    this.lyric = "And on that Farm he had a " + this.species + " EIEIO <br>" + " With a " + this.sounds + " here and a " + this.sounds + " there <br> The " + this.species + " called " + this.name + " ate " + this.eaten + " kg of " + this.food + ".<br>"; 
    
            }
    
    
    
            // Lyrics
            sing(): string {
    
                console.log(this.lyric);
    
                return this.lyric;
    
            }
    
            // Leftover Food 
            eat(): string {
    
                let update: number = this.amountFood - this.eaten;
    
                return update.toString();
             }
    
        }
    
    }
    
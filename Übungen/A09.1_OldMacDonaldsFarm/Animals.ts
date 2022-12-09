/*
Aufgabe: A09.1 OldMacDonald
Name: Alina Stumpf
Matrikel: 271137
Datum: 06.12.2022
Quellen: -
*/

namespace A09_1_OldMacDonald {
    export class Animal {
        
     foodAmount: number;
     animal: string;
     food: string;
     name: string;
     sound: string;
     index: number;
     songlyrics: string;
     heading: string;
      
     headingSentence: string[] = [" namens " , " hat heute noch "];
     otherGrammar: string[] = [" ein " , " ein " , " ein ", " ein "];
     item: string[] = ["Die ", "Das ", "Der ", "Der ", "Die "];
     song: string[] = ["Old MacDonald hat ne' Farm, I-A-I-A-O ,<br> und auf der Farm hat er ein ", " I-A-I-A-O.<br> Mit \'nem ", " hier und \'nem ", " da,<br>hier ein ", ", da ein ", ", überall nur ", ",<br>Old MacDonald hat ne' Farm, I-A-I-A-O."];
     nameTemplate: string [] = ["Berta", "Günter", "Fred", "Eberhard", "Manfred"]; 
     animalTemplate: string[] = ["Kuh", "Huhn", "Hund", "Bulle", "Schwein"];
     foodTemplate: string[] = ["Grundfutter", "Bio-Hühnerfutter", "Knochen", "Rindfutter", "Mastfutter"];
     soundTemplate: string[] = ["muh", "put", "wuff", "schnauf", "oink"];
        
        constructor(_animal: string) {
            this.set(_animal);
            this.setFood();
            this.setName();
            this.setSound();
            this.setFoodAmount();
            this.setSongLyrics();
            this.setHeading();
            this.eat();
        }
        eat(): void {
            if (this.food == "Grundfutter") {
                this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4);    
            }
            if (this.food == "Bio-Hühnerfutter") {
                this.foodAmount = this.foodAmount - Math.floor(Math.random() * 9);
            }
            if (this.food == "Knochen") {
                this.foodAmount--;
            }
            if (this.food == "Rindfutter") {
                this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4);
            }
            if (this.food == "Mastfutter") {
                this.foodAmount = this.foodAmount - Math.floor(Math.random() * 4);
            }

        }
        getAnimal(): string {
            return this.animal;
        }
        getFood(): string {
            return this.food;
        }
        getFoodAmount(): number {
            return this.foodAmount;
        }
        getSound(): string {
            return this.sound;
        }
        getName(): string {
            return this.name;
        }
        getSongLyrics(): string {
            return this.songlyrics;
        }
        getHeading(): string {
            return this.heading;
        }

        setNewHeading(): string {
            return this.heading = this.item[this.index] + " " + this.animal + " " + this.headingSentence[0] + this.name + this.headingSentence[1] + " "  + this.foodAmount + " " + this.food;
        }
        
        set(_animal: string): void {
            for (let i: number = 0; i < this.animalTemplate.length; i++) {
                if (_animal == this.animalTemplate[i]) {
                    this.animal = _animal;
                    this.index = i;
                }
            }
        }
        
        setFoodAmount(): void {
             if (this.food == "Grundfutter") {
                this.foodAmount = Math.floor(Math.random() * 10) + 1; 
             }
             if (this.food == "Bio-Hühnerfutter") {
                this.foodAmount = Math.floor(Math.random() * 50) + 1;
             }
             if (this.food == "Knochen") {
                this.foodAmount = Math.floor(Math.random() * 5) + 1;
             }
             if (this.food == "Rindfutter") {
                this.foodAmount = Math.floor(Math.random() * 10) + 1;
             }
             if (this.food == "Mastfutter") {
                this.foodAmount = Math.floor(Math.random() * 10) + 1;
             }
         }
        setFood(): void {
            this.food = this.foodTemplate[this.index];
        }
        setSound(): void {
            this.sound = this.soundTemplate[this.index];
        }
        setName(): void {
            this.name = this.nameTemplate[Math.floor(Math.random() * 5) + 0];
        }
        setSongLyrics(): void {
            this.songlyrics = this.song[0] + this.otherGrammar[this.index] + this.animal + this.song[1] + this.sound + "-" + this.sound + this.song[2]  + this.sound + "-" + this.sound + this.song[3] + this.sound + this.song[4] + this.sound + this.song[5] + this.sound + "-" + this.sound + this.song[6];
        }
        setHeading(): void {
            this.heading = this.item[this.index] + " " + this.animal + " " + this.headingSentence[0] + this.name + this.headingSentence[1] + " "  + this.foodAmount + " " + this.food;
        }
    }
}
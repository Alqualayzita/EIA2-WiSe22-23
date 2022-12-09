"use strict";
/*
Aufgabe: A09.1 OldMacDonald
Name: Alina Stumpf
Matrikel: 271137
Datum: 06.12.2022
Quellen: -
*/
var A09_1_OldMacDonald;
(function (A09_1_OldMacDonald) {
    class Animal {
        foodAmount;
        animal;
        food;
        name;
        sound;
        index;
        songlyrics;
        heading;
        headingSentence = [" namens ", " hat heute noch "];
        otherGrammar = [" ein ", " ein ", " ein ", " ein "];
        item = ["Die ", "Das ", "Der ", "Der ", "Die "];
        song = ["Old MacDonald hat ne' Farm, I-A-I-A-O ,<br> und auf der Farm hat er ein ", " I-A-I-A-O.<br> Mit \'nem ", " hier und \'nem ", " da,<br>hier ein ", ", da ein ", ", überall nur ", ",<br>Old MacDonald hat ne' Farm, I-A-I-A-O."];
        nameTemplate = ["Berta", "Günter", "Fred", "Eberhard", "Manfred"];
        animalTemplate = ["Kuh", "Huhn", "Hund", "Bulle", "Schwein"];
        foodTemplate = ["Grundfutter", "Bio-Hühnerfutter", "Knochen", "Rindfutter", "Mastfutter"];
        soundTemplate = ["muh", "put", "wuff", "schnauf", "oink"];
        constructor(_animal) {
            this.set(_animal);
            this.setFood();
            this.setName();
            this.setSound();
            this.setFoodAmount();
            this.setSongLyrics();
            this.setHeading();
            this.eat();
        }
        eat() {
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
        getAnimal() {
            return this.animal;
        }
        getFood() {
            return this.food;
        }
        getFoodAmount() {
            return this.foodAmount;
        }
        getSound() {
            return this.sound;
        }
        getName() {
            return this.name;
        }
        getSongLyrics() {
            return this.songlyrics;
        }
        getHeading() {
            return this.heading;
        }
        setNewHeading() {
            return this.heading = this.item[this.index] + " " + this.animal + " " + this.headingSentence[0] + this.name + this.headingSentence[1] + " " + this.foodAmount + " " + this.food;
        }
        set(_animal) {
            for (let i = 0; i < this.animalTemplate.length; i++) {
                if (_animal == this.animalTemplate[i]) {
                    this.animal = _animal;
                    this.index = i;
                }
            }
        }
        setFoodAmount() {
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
        setFood() {
            this.food = this.foodTemplate[this.index];
        }
        setSound() {
            this.sound = this.soundTemplate[this.index];
        }
        setName() {
            this.name = this.nameTemplate[Math.floor(Math.random() * 5) + 0];
        }
        setSongLyrics() {
            this.songlyrics = this.song[0] + this.otherGrammar[this.index] + this.animal + this.song[1] + this.sound + "-" + this.sound + this.song[2] + this.sound + "-" + this.sound + this.song[3] + this.sound + this.song[4] + this.sound + this.song[5] + this.sound + "-" + this.sound + this.song[6];
        }
        setHeading() {
            this.heading = this.item[this.index] + " " + this.animal + " " + this.headingSentence[0] + this.name + this.headingSentence[1] + " " + this.foodAmount + " " + this.food;
        }
    }
    A09_1_OldMacDonald.Animal = Animal;
})(A09_1_OldMacDonald || (A09_1_OldMacDonald = {}));
//# sourceMappingURL=Animals.js.map
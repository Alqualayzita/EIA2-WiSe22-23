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
    let day = 1;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let cow = new A09_1_OldMacDonald.Animal("Kuh");
        let chicken = new A09_1_OldMacDonald.Animal("Huhn");
        let dog = new A09_1_OldMacDonald.Animal("Hund");
        let bull = new A09_1_OldMacDonald.Animal("Bulle");
        let pig = new A09_1_OldMacDonald.Animal("Schwein");
        let nextDay = document.querySelector("#nextDay");
        document.getElementById("Day").innerHTML = "Tag:" + day.toString();
        document.getElementById("cowHeading").innerHTML = cow.getHeading();
        document.getElementById("cowlyrics").innerHTML = cow.getSongLyrics();
        document.getElementById("chickenHeading").innerHTML = chicken.getHeading();
        document.getElementById("chickenlyrics").innerHTML = chicken.getSongLyrics();
        document.getElementById("dogHeading").innerHTML = dog.getHeading();
        document.getElementById("doglyrics").innerHTML = dog.getSongLyrics();
        document.getElementById("bullHeading").innerHTML = bull.getHeading();
        document.getElementById("bulllyrics").innerHTML = bull.getSongLyrics();
        document.getElementById("pigHeading").innerHTML = pig.getHeading();
        document.getElementById("piglyrics").innerHTML = pig.getSongLyrics();
        nextDay.addEventListener("click", function () {
            Load(cow, chicken, dog, bull, pig);
        }, false);
    }
    function Load(_cow, _chicken, _dog, _bull, _pig) {
        _cow.eat();
        _chicken.eat();
        _dog.eat();
        _bull.eat();
        _pig.eat();
        day++;
        document.getElementById("Day").innerHTML = "Tag:" + day.toString();
        document.getElementById("cowHeading").innerHTML = _cow.setNewHeading();
        document.getElementById("chickenHeading").innerHTML = _chicken.setNewHeading();
        document.getElementById("dogHeading").innerHTML = _dog.setNewHeading();
        document.getElementById("bullHeading").innerHTML = _bull.setNewHeading();
        document.getElementById("pigHeading").innerHTML = _pig.setNewHeading();
        if (_cow.foodAmount < 0) {
            document.getElementById("cowHeading").style.display = "none";
            document.getElementById("cowlyrics").style.display = "none";
        }
        if (_chicken.foodAmount < 0) {
            document.getElementById("chickenHeading").style.display = "none";
            document.getElementById("chickenlyrics").style.display = "none";
        }
        if (_dog.foodAmount < 0) {
            document.getElementById("dogHeading").style.display = "none";
            document.getElementById("doglyrics").style.display = "none";
        }
        if (_bull.foodAmount < 0) {
            document.getElementById("bullHeading").style.display = "none";
            document.getElementById("bulllyrics").style.display = "none";
        }
        if (_pig.foodAmount < 0) {
            document.getElementById("pigHeading").style.display = "none";
            document.getElementById("piglyrics").style.display = "none";
        }
        return;
    }
})(A09_1_OldMacDonald || (A09_1_OldMacDonald = {}));
//# sourceMappingURL=OldMacDonald.js.map
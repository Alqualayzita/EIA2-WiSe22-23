/*
Aufgabe: A09.1 OldMacDonald
Name: Alina Stumpf
Matrikel: 271137
Datum: 06.12.2022
Quellen: -
*/

namespace A09_1_OldMacDonald {

    let day: number = 1;
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {

        let cow: Animal = new Animal("Kuh");
        let chicken: Animal = new Animal("Huhn");
        let dog: Animal = new Animal("Hund");
        let bull: Animal = new Animal("Bulle");
        let pig: Animal = new Animal("Schwein");

        let nextDay: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#nextDay");

        document.getElementById("Day").innerHTML = "Tag:" + day.toString();
        document.getElementById("cowHeading").innerHTML = cow.getHeading();
        document.getElementById("cowlyrics").innerHTML =cow.getSongLyrics();
        document.getElementById("chickenHeading").innerHTML = chicken.getHeading();
        document.getElementById("chickenlyrics").innerHTML = chicken.getSongLyrics();
        document.getElementById("dogHeading").innerHTML = dog.getHeading();
        document.getElementById("doglyrics").innerHTML = dog.getSongLyrics();
        document.getElementById("bullHeading").innerHTML = bull.getHeading();
        document.getElementById("bulllyrics").innerHTML = bull.getSongLyrics();
        document.getElementById("pigHeading").innerHTML = pig.getHeading();
        document.getElementById("piglyrics").innerHTML = pig.getSongLyrics();

        nextDay.addEventListener (
            "click", 
            function(): void {         
                Load(cow, chicken, dog, bull, pig);  
            }, 
            false
         );
    }
    function Load(_cow: Animal, _chicken: Animal, _dog: Animal, _bull: Animal, _pig: Animal): void {
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
}
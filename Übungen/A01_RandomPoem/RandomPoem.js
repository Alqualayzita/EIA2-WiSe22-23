"use strict";
/*
Aufgabe: A01 Random Poem
Name: Alina Stumpf
Matrikel: 271137
Datum: 11.10.22
Quellen: -
*/
var RandomPoem;
(function (RandomPoem) {
    /* 3 Arrays für Subjekte, Prädikate und Objekte*/
    let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedicat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    /* For-Schleife, welche eine Variable (Subjekt) zählt und beim letzten Durchlauf 1 ist*/
    for (let index = subject.length; index >= 1; index--) {
        //Ausgabe der zufälligen Sätze in der Konsole//
        console.log(getVerse(subject, praedicat, object));
    }
    /* Funktion zur Erstellung der Sätze, Deklarierung als string*/
    function getVerse(_subject, _praedicat, _object) {
        // Entstehung zufälliger Zahl und aufrunden//
        let randomSubject = Math.floor(Math.random() * subject.length);
        let randomPraedicat = Math.floor(Math.random() * praedicat.length);
        let randomObject = Math.floor(Math.random() * object.length);
        /*Aufbau Satz, entsprechendes Wort an der Stelle der zufälligen Nummer wird genommen*/
        let verse = _subject[randomSubject] + " " + _praedicat[randomPraedicat] + " " + _object[randomObject];
        /*Wort mit der entsprechenden zufälligen Nummer wird aus dem Array herausgeschnitten und zum Satz hinzugefügt*/
        _subject.splice(randomSubject, 1);
        _praedicat.splice(randomPraedicat, 1);
        _object.splice(randomObject, 1);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map
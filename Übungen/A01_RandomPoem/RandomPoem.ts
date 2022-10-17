/*
Aufgabe: A01 Random Poem
Name: Alina Stumpf
Matrikel: 271137
Datum: 11.10.22
Quellen: -
*/

namespace RandomPoem 
{
    /* 3 Arrays für Subjekte, Prädikate und Objekte*/
    let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedicat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let object: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    /* For-Schleife, welche eine Variable (Subjekt) zählt und beim letzten Durchlauf 1 ist*/
    for (let index: number = subject.length; index >= 1; index--) 
    {
        //Ausgabe der zufälligen Sätze in der Konsole//
        console.log(getVerse(subject, praedicat, object));
    }

    /* Funktion zur Erstellung der Sätze, Deklarierung als string*/
    function getVerse (_subject: string[], _praedicat: string[], _object: string[] ): string 
    {
        // Entstehung zufälliger Zahl und aufrunden//
        let randomSubject: number = Math.floor(Math.random() * subject.length);
        let randomPraedicat: number = Math.floor(Math.random() * praedicat.length);
        let randomObject: number = Math.floor(Math.random() * object.length);

        /*Aufbau Satz, entsprechendes Wort an der Stelle der zufälligen Nummer wird genommen*/
        let  verse = _subject[randomSubject] + " " + _praedicat[randomPraedicat] + " " + _object[randomObject];
        
        /*Wort mit der entsprechenden zufälligen Nummer wird aus dem Array herausgeschnitten und zum Satz hinzugefügt*/
        _subject.splice(randomSubject, 1);
        _praedicat.splice(randomPraedicat, 1);
        _object.splice(randomObject, 1);

        return verse;
    }
}
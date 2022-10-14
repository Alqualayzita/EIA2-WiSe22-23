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
    let subjekt: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    /* For-Schleife, welche eine Variable (Subjekt) zählt und beim letzten Durchlauf 1 ist*/
    for (let index: number = subjekt.length; index >= 1; index--) 
    {
        //Ausgabe der zufälligen Sätze in der Konsole//
        console.log(getVerse(subjekt, prädikat, objekt));
    }

    /* Funktion zur Erstellung der Sätze, Deklarierung als string*/
    function getVerse (_subjekt: string[], _prädikat: string[], _objekt: string[] ): string 
    {
        // Entstehung zufälliger Zahl und aufrunden//
        let randomSubjekt: number = Math.floor(Math.random() * subjekt.length);
        let randomPrädikat: number = Math.floor(Math.random() * prädikat.length);
        let randomObjekt: number = Math.floor(Math.random() * objekt.length);

        /*Aufbau Satz, entsprechendes Wort an der Stelle der zufälligen Nummer wird genommen*/
        let  verse = _subjekt[randomSubjekt] + " " + _prädikat[randomPrädikat] + " " + _objekt[randomObjekt];
        
        /*Wort mit der entsprechenden zufälligen Nummer wird aus dem Array herausgeschnitten und zum Satz hinzugefügt*/
        _subjekt.splice(randomSubjekt, 1);
        _prädikat.splice(randomPrädikat, 1);
        _objekt.splice(randomObjekt, 1);

        return verse;
    }
}
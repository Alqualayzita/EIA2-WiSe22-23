/*
Aufgabe: A04 Einkaufsliste Datenstruktur
Name: Alina Stumpf
Matrikel: 271137
Datum: 5.11.2022
Quellen: -
*/

namespace A04_DataStructure {

    export interface Item {
        name: string;
        number: number;
        comment: string;
        buy: boolean;
        date: string;

    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        entry: [
            {
                name: "Äpfel",
                number: 10, 
                comment: "Bio-Äfpel",
                buy: true,
                date: "27.10.22"
            },
            { 
                name: "Milch", 
                number: 1, 
                comment: "-",
                buy: false,
                date: "05.11.22" 
            },
                
            { 
                name: "Saft", 
                number: 2, 
                comment: "-",
                buy: false,
                date: "05.11.22" 
            }
        ]
    };
    export let Item: string=""
}
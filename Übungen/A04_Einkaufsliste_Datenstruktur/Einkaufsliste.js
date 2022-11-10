"use strict";
/*
Aufgabe: A04 Einkaufsliste Datenstruktur
Name: Alina Stumpf
Matrikel: 271137
Datum: 05.11.2022
Quellen:
*/
var A04_EinkaufslisteDatenstruktur;
(function (A04_EinkaufslisteDatenstruktur) {
    let newItemPanel = document.getElementById("Input");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.getElementById("addnewItem").addEventListener("click", showNewItemArea);
        document.getElementById("newitemButton").addEventListener("click", addNewItem);
        A04_EinkaufslisteDatenstruktur.generateContent(A04_EinkaufslisteDatenstruktur.shoppingList);
    }
    function showNewItemArea() {
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    function addNewItem() {
        let newFormInput = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        console.log(newInputData.get("product"));
        console.log(newInputData.get("quantity"));
        console.log(newInputData.get("comment"));
        if (newInputData.get("product") == "" || newInputData.get("quantity") < 1) {
            return;
        }
        A04_EinkaufslisteDatenstruktur.destroyContent(A04_EinkaufslisteDatenstruktur.shoppingList);
        let currentDate = new Date();
        let wrongMonth = parseInt(currentDate.getMonth());
        let correctDate = currentDate.getDate() + "." + (wrongMonth + 1) + "." + currentDate.getFullYear();
        let newItem = {
            product: String(newInputData.get("product")),
            quantity: parseInt(newInputData.get("quantity")),
            comment: String(newInputData.get("comment")),
            inCart: false,
            bought: false,
            lastPurchase: correctDate
        };
        A04_EinkaufslisteDatenstruktur.shoppingList.Liste.push(newItem);
        A04_EinkaufslisteDatenstruktur.generateContent(A04_EinkaufslisteDatenstruktur.shoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
})(A04_EinkaufslisteDatenstruktur || (A04_EinkaufslisteDatenstruktur = {}));
//# sourceMappingURL=Einkaufsliste.js.map
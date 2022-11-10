"use strict";
/*
Aufgabe: A05 Einkaufsliste Client
Name: Alina Stumpf
Matrikel: 271137
Datum: 10.11.2022
Quellen:
*/
var A05_EinkaufslisteClient;
(function (A05_EinkaufslisteClient) {
    let dataJSON = "https://alqualayzita.github.io/EIA2_WiSe22-23/Übungen/A05_Einkaufsliste_Client/data.json";
    let newItemPanel = document.getElementById("Input");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.getElementById("addnewItem").addEventListener("click", showNewItemArea);
        document.getElementById("newitemButton").addEventListener("click", addNewItem);
        A05_EinkaufslisteClient.generateContent(A05_EinkaufslisteClient.shoppingList);
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
        A05_EinkaufslisteClient.destroyContent(A05_EinkaufslisteClient.shoppingList);
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
        A05_EinkaufslisteClient.shoppingList.Liste.push(newItem);
        A05_EinkaufslisteClient.generateContent(A05_EinkaufslisteClient.shoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
})(A05_EinkaufslisteClient || (A05_EinkaufslisteClient = {}));
//# sourceMappingURL=Einkaufsliste.js.map
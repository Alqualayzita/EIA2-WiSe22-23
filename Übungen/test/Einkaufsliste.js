"use strict";
/*
Aufgabe: A04 Einkaufsliste Datenstruktur
Name: Alina Stumpf
Matrikel: 271137
Datum: 05.11.2022
Quellen:
*/
var A06_EinkaufslisteDatenstruktur;
(function (A06_EinkaufslisteDatenstruktur) {
    A06_EinkaufslisteDatenstruktur.dataJSON = "https://alqualayzita.github.io/EIA2_WiSe22-23/Übungen/A05_Einkaufsliste_Client/data.json";
    let newItemPanel = document.getElementById("Input");
    window.addEventListener("load", handleLoad);
    async function importJSON(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        A06_EinkaufslisteDatenstruktur.globalShoppingList = await response.json();
        console.log(A06_EinkaufslisteDatenstruktur.globalShoppingList);
    }
    async function handleLoad() {
        document.getElementById("addnewItem").addEventListener("click", showNewItemArea);
        document.getElementById("newitemButton").addEventListener("click", addNewItem);
        await importJSON(A06_EinkaufslisteDatenstruktur.dataJSON);
        A06_EinkaufslisteDatenstruktur.generateContent(A06_EinkaufslisteDatenstruktur.globalShoppingList);
    }
    async function updateJSON() {
        let sendJSONString = JSON.stringify(A06_EinkaufslisteDatenstruktur.globalShoppingList);
        console.log(sendJSONString);
        let query = new URLSearchParams(sendJSONString);
        await fetch("ShoppingApp.html?" + query.toString());
        alert("JSON Datei wurde geupdated!");
    }
    A06_EinkaufslisteDatenstruktur.updateJSON = updateJSON;
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
        A06_EinkaufslisteDatenstruktur.destroyContent(A06_EinkaufslisteDatenstruktur.globalShoppingList);
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
        A06_EinkaufslisteDatenstruktur.globalShoppingList.List.push(newItem);
        updateJSON();
        A06_EinkaufslisteDatenstruktur.generateContent(A06_EinkaufslisteDatenstruktur.globalShoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
})(A06_EinkaufslisteDatenstruktur || (A06_EinkaufslisteDatenstruktur = {}));
//# sourceMappingURL=Einkaufsliste.js.map
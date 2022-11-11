"use strict";
/*
Aufgabe: A05 Einkaufsliste Client
Name: Alina Stumpf
Matrikel: 271137
Datum: 11.11.2022
Quellen:
*/
var A05_Einkaufsliste_Client;
(function (A05_Einkaufsliste_Client) {
    A05_Einkaufsliste_Client.dataJSON = "https://alqualayzita.github.io/EIA2-WiSe22-23/%C3%9Cbungen/A05_Einkaufsliste_Client/data.json";
    let newItemPanel = document.getElementById("Input");
    window.addEventListener("load", handleLoad);
    async function importJSON(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        A05_Einkaufsliste_Client.globalShoppingList = await response.json();
        console.log(A05_Einkaufsliste_Client.globalShoppingList);
    }
    async function handleLoad() {
        document.getElementById("addnewItem").addEventListener("click", showNewItemArea);
        document.getElementById("newitemButton").addEventListener("click", addNewItem);
        await importJSON(A05_Einkaufsliste_Client.dataJSON);
        A05_Einkaufsliste_Client.generateContent(A05_Einkaufsliste_Client.globalShoppingList);
    }
    async function updateJSON() {
        let sendJSONString = JSON.stringify(A05_Einkaufsliste_Client.globalShoppingList);
        console.log(sendJSONString);
        let query = new URLSearchParams(sendJSONString);
        await fetch("ShoppingApp.html?" + query.toString());
        alert("Update JSON");
    }
    A05_Einkaufsliste_Client.updateJSON = updateJSON;
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
        A05_Einkaufsliste_Client.destroyContent(A05_Einkaufsliste_Client.globalShoppingList);
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
        A05_Einkaufsliste_Client.globalShoppingList.List.push(newItem);
        updateJSON();
        A05_Einkaufsliste_Client.generateContent(A05_Einkaufsliste_Client.globalShoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
})(A05_Einkaufsliste_Client || (A05_Einkaufsliste_Client = {}));
//# sourceMappingURL=Einkaufsliste.js.map
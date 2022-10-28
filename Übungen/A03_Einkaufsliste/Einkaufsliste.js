"use strict";
/*
Aufgabe: A03 Einkaufsliste
Name: Alina Stumpf
Matrikel: 271137
Datum: 27.10.22
Quellen: -
*/
var Einkaufsliste;
(function (Einkaufsliste) {
    window.addEventListener("load", handleList);
    function handleList() {
        let addButton = document.querySelector("#add");
        let deleteButton = document.querySelector("#delete");
        let checkButton = document.querySelector("#check");
        let editButton = document.querySelector("#edit");
        addButton.addEventListener("click", add);
        deleteButton.addEventListener("click", deleteItem);
        checkButton.addEventListener("click", check);
        editButton.addEventListener("click", edit);
    }
})(Einkaufsliste || (Einkaufsliste = {}));
function add() {
    console.log("Hinzufügen von neuem Eintrag");
}
function check() {
    console.log("Checkbox markieren");
}
function edit() {
    console.log("Eintrag bearbeiten");
}
function deleteItem() {
    console.log("Eintrag löschen");
}
//# sourceMappingURL=Einkaufsliste.js.map
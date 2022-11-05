"use strict";
/*
Aufgabe: A04 Einkaufsliste Datenstruktur
Name: Alina Stumpf
Matrikel: 271137
Datum: 5.11.2022
Quellen: -
*/
var A04_DataStructure;
(function (A04_DataStructure) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        A04_DataStructure.generateContent(A04_DataStructure.data);
        let addButton = document.querySelector("#add");
        let deleteButton = document.querySelector("#delete");
        let editButton = document.querySelector("#edit");
        addButton.addEventListener("click", addEntry);
        deleteButton.addEventListener("click", deleteEntry);
        editButton.addEventListener("click", editEntry);
    }
    createList();
    function createList() {
    }
    function addEntry() {
        console.log("Eintrag hinzufügen");
        let list = document.querySelector(".list");
        let div = document.createElement("div");
        let label = document.createElement("label");
        let iconTrash = document.createElement("i");
        let iconEdit = document.createElement("i");
        let iconChecked = document.createElement("input");
        div.addEventListener("click", checkEntry);
        iconTrash.addEventListener("click", deleteEntry);
        iconEdit.addEventListener("click", editEntry);
        div.classList.add("box");
        iconChecked.type = "checkbox";
        iconChecked.classList.add("check");
        iconEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';
        iconEdit.classList.add("edit");
        iconTrash.innerHTML = '<i class="fa-solid fa-trash"> </i>';
        iconTrash.classList.add("trash");
        let nameValue = document.getElementById("name");
        let numberValue = document.getElementById("number");
        let commentValue = document.getElementById("comment");
        let dateValue = document.getElementById("date");
        label.innerHTML += nameValue.value + ", " + numberValue.value + ", " + commentValue.value + ", " + dateValue.value;
        label.append(iconChecked, iconEdit, iconTrash);
        div.append(label);
        list.append(div);
    }
    function deleteEntry() {
        console.log("Eintrag löschen");
        this.parentElement.parentElement.remove();
    }
    function checkEntry() {
        console.log("Eintrag erledigt");
    }
    function editEntry() {
        console.log("Eintrag bearbeiten");
    }
})(A04_DataStructure || (A04_DataStructure = {}));
//# sourceMappingURL=Einkaufsliste.js.map
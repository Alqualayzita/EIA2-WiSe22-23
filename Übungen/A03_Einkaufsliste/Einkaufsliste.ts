/*
Aufgabe: A03 Einkaufsliste
Name: Alina Stumpf
Matrikel: 271137
Datum: 27.10.22
Quellen: -
*/

namespace Einkaufsliste {

    window.addEventListener("load", handleList);

  
    function handleList(): void {
        let addButton: Element = document.querySelector("#add");
        let deleteButton: Element = document.querySelector(".delete");
        let checkButton: Element = document.querySelector(".check");
        let editButton: Element=document.querySelector(".edit")

        addButton.addEventListener("click", add);
        deleteButton.addEventListener("click", deleteItem);
        checkButton.addEventListener("click", check);
        editButton.addEventListener("click", edit)
    }

    }
    function add(): void {
        console.log("Hinzufügen von neuem Eintrag");
    }
    function check(): void {
        console.log("Checkbox markieren");
    }
    function edit(): void {
        console.log("Eintrag bearbeiten");
    }
    function deleteItem(): void {
        console.log("Eintrag löschen");
    }

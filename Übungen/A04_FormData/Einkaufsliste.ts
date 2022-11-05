/*
Aufgabe: A04 Einkaufsliste Datenstruktur
Name: Alina Stumpf
Matrikel: 271137
Datum: 5.11.2022
Quellen: -
*/

namespace A04_DataStructure {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        generateContent(data);

        let addButton: Element = document.querySelector("#add");
        let deleteButton: Element = document.querySelector("#delete");
        let editButton: Element = document.querySelector("#edit");

        addButton.addEventListener("click", addEntry);
        deleteButton.addEventListener("click", deleteEntry);
        editButton.addEventListener("click", editEntry);
}

    createList();

function createList(): void {
}

function addEntry(): void {
    console.log("Eintrag hinzufügen");

    let list: HTMLElement = document.querySelector<HTMLElement>(".list");
    let div: HTMLElement = document.createElement("div");
    let label: HTMLElement = document.createElement("label");
    let iconTrash: HTMLElement = document.createElement("i");
    let iconEdit: HTMLElement=document.createElement("i");
    let iconChecked: HTMLInputElement = document.createElement("input");


    div.addEventListener("click", checkEntry);
    iconTrash.addEventListener("click", deleteEntry);
    iconEdit.addEventListener("click", editEntry)

    div.classList.add("box");

    iconChecked.type = "checkbox";
    iconChecked.classList.add("check");
    iconEdit.innerHTML=  '<i class="fa-solid fa-pen"></i>';
    iconEdit.classList.add("edit")
    iconTrash.innerHTML = '<i class="fa-solid fa-trash"> </i>';
    iconTrash.classList.add("trash");

    let nameValue: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
    let numberValue: HTMLInputElement = <HTMLInputElement>document.getElementById("number");
    let commentValue: HTMLInputElement = <HTMLInputElement>document.getElementById("comment");
    let dateValue: HTMLInputElement = <HTMLInputElement>document.getElementById("date");


    label.innerHTML += nameValue.value + ", " + numberValue.value + ", " + commentValue.value + ", " + dateValue.value;
    label.append(iconChecked, iconEdit, iconTrash);

    div.append(label);
    list.append(div);
}

function deleteEntry(): void {
    console.log("Eintrag löschen");
    this.parentElement.parentElement.remove();
}

function checkEntry(): void {
    console.log("Eintrag erledigt");
}

function editEntry(): void {
    console.log("Eintrag bearbeiten");
}     
}

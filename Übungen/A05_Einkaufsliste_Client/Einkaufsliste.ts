/*
Aufgabe: A05 Einkaufsliste Client
Name: Alina Stumpf
Matrikel: 271137
Datum: 10.11.2022
Quellen: 
*/

namespace A05_EinkaufslisteClient
{
    let dataJSON: string = "https://alqualayzita.github.io/EIA2_WiSe22-23/Übungen/A05_Einkaufsliste_Client/data.json";
    let newItemPanel: HTMLElement = document.getElementById("Input");
    window.addEventListener("load", handleLoad);
    function handleLoad(): void
    {
        document.getElementById("addnewItem").addEventListener("click", showNewItemArea);
        document.getElementById("newitemButton").addEventListener("click", addNewItem); 
        generateContent(shoppingList); 
    }
    function showNewItemArea(): void 
    {        
        newItemPanel.setAttribute("style", "display:inline-block;");
    }
    function addNewItem(): void
    {
        let newFormInput: HTMLElement = document.getElementById("InputForm");
        let newInputData = new FormData(newFormInput);
        console.log(newInputData.get("product"));
        console.log(newInputData.get("quantity"));
        console.log(newInputData.get("comment"));
        if(newInputData.get("product") == "" || newInputData.get("quantity") < 1)
        {
            return;
        }
        destroyContent(shoppingList);
        let currentDate: Date = new Date();
        let wrongMonth: number = parseInt(currentDate.getMonth());
        let correctDate: string = currentDate.getDate() + "." + (wrongMonth + 1)  + "." + currentDate.getFullYear();
        let newItem: ShoppingItem =
        {
            product: String(newInputData.get("product")),
            quantity: parseInt(newInputData.get("quantity")),
            comment: String(newInputData.get("comment")),
            inCart: false,
            bought: false,
            lastPurchase: correctDate
        };
        shoppingList.Liste.push(newItem);
        generateContent(shoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
}    
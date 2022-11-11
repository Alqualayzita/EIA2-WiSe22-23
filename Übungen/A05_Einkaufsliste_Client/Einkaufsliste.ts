/*
Aufgabe: A05 Einkaufsliste Client
Name: Alina Stumpf
Matrikel: 271137
Datum: 11.11.2022
Quellen: -
*/

namespace A05_Einkaufsliste_Client
{
    export let dataJSON: string = "https://alqualayzita.github.io/EIA2-WiSe22-23/%C3%9Cbungen/A05_Einkaufsliste_Client/data.json";
    export let globalShoppingList: ShoppingList;
    let newItemPanel: HTMLElement = document.getElementById("Input");
    window.addEventListener("load", handleLoad);
    async function importJSON(_url: RequestInfo): Promise<void>
    {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        globalShoppingList = await response.json();
        console.log(globalShoppingList);
    }
    async function handleLoad(): Promise<void>
    {
        document.getElementById("addnewItem").addEventListener("click", showNewItemArea);
        document.getElementById("newitemButton").addEventListener("click", addNewItem); 
        await importJSON(dataJSON);
        generateContent(globalShoppingList); 
    }
    export async function updateJSON(): Promise<void>
    {
            let sendJSONString: string = JSON.stringify(globalShoppingList);
            console.log(sendJSONString);
            let query: URLSearchParams = new URLSearchParams(<any>sendJSONString);
            await fetch("ShoppingApp.html?" + query.toString());
            alert("Update JSON");    
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
        if( newInputData.get("product") == "" || newInputData.get("quantity") < 1 )
        {
            return;
        }
        destroyContent(globalShoppingList);
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
        globalShoppingList.List.push(newItem);
        updateJSON();
        generateContent(globalShoppingList);
        newItemPanel.setAttribute("style", "display:none;");
    }
}    
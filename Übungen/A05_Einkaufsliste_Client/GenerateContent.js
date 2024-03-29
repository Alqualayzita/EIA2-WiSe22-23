"use strict";
var A05_Einkaufsliste_Client;
(function (A05_Einkaufsliste_Client) {
    function generateContent(_shoppingList) {
        let listSpace = document.getElementById("list");
        for (let i = 0; i < _shoppingList.List.length; i++) {
            let newProductDiv = document.createElement("div");
            newProductDiv.classList.add("item_box");
            newProductDiv.setAttribute("id", "item-" + i);
            listSpace.appendChild(newProductDiv);
            let newProductName = document.createElement("p");
            newProductName.classList.add("product");
            newProductName.innerHTML = _shoppingList.List[i].product;
            newProductDiv.appendChild(newProductName);
            let newPurchaseDate = document.createElement("p");
            newPurchaseDate.classList.add("date");
            newPurchaseDate.innerHTML = _shoppingList.List[i].lastPurchase;
            newProductDiv.appendChild(newPurchaseDate);
            let newAmount = document.createElement("input");
            newAmount.setAttribute("type", "number");
            newAmount.setAttribute("min", "0");
            newAmount.setAttribute("id", "amountField_" + i);
            newAmount.classList.add("amount_item");
            newAmount.value = _shoppingList.List[i].quantity;
            newProductDiv.appendChild(newAmount);
            let newComment = document.createElement("textarea");
            newComment.classList.add("comment");
            newComment.setAttribute("id", "commentTextarea_" + i);
            newComment.value = _shoppingList.List[i].comment;
            newProductDiv.appendChild(newComment);
            let newStatusButton = document.createElement("i");
            newStatusButton.classList.add("fa-solid");
            newStatusButton.classList.add("fa-circle");
            newStatusButton.classList.add("button");
            newStatusButton.setAttribute("id", "StatusButtonId_" + i);
            newProductDiv.appendChild(newStatusButton);
            let newUpdateItemButton = document.createElement("button");
            newUpdateItemButton.classList.add("status_item");
            newUpdateItemButton.classList.add("button");
            newUpdateItemButton.setAttribute("id", "updateButtonID_" + i);
            newUpdateItemButton.innerHTML = "Änderungen übernehmen";
            newProductDiv.appendChild(newUpdateItemButton);
            let newTrashButton = document.createElement("i");
            newTrashButton.classList.add("fa-solid");
            newTrashButton.classList.add("fa-trash");
            newTrashButton.classList.add("button");
            newTrashButton.setAttribute("id", "TrashButtonId_" + i);
            newProductDiv.appendChild(newTrashButton);
            newStatusButton.addEventListener("click", changeItemStatus);
            newUpdateItemButton.addEventListener("click", updateItem);
            newTrashButton.addEventListener("click", deleteItem);
        }
    }
    A05_Einkaufsliste_Client.generateContent = generateContent;
    function destroyContent(_shoppingList) {
        for (let i = 0; i < _shoppingList.List.length; i++) {
            let currentItemDiv = document.getElementById("item-" + i);
            currentItemDiv.remove();
        }
    }
    A05_Einkaufsliste_Client.destroyContent = destroyContent;
    function deleteItem() {
        let activeID = parseInt(getButtonID());
        destroyContent(A05_Einkaufsliste_Client.globalShoppingList);
        A05_Einkaufsliste_Client.globalShoppingList.List.splice(activeID, 1);
        generateContent(A05_Einkaufsliste_Client.globalShoppingList);
        A05_Einkaufsliste_Client.updateJSON();
    }
    function updateItem() {
        let newAmountString = document.getElementById("amountField_" + getButtonID()).value;
        let newCommentString = document.getElementById("commentTextarea_" + getButtonID()).value;
        A05_Einkaufsliste_Client.globalShoppingList.List[getButtonID()].quantity = parseInt(newAmountString);
        A05_Einkaufsliste_Client.globalShoppingList.List[getButtonID()].comment = newCommentString;
        destroyContent(A05_Einkaufsliste_Client.globalShoppingList);
        generateContent(A05_Einkaufsliste_Client.globalShoppingList);
        A05_Einkaufsliste_Client.updateJSON();
    }
    function changeItemStatus() {
        let ActiveButton = document.getElementById("StatusButtonId_" + getButtonID());
        let ActiveID = parseInt(getButtonID());
        if (A05_Einkaufsliste_Client.globalShoppingList.List[ActiveID].inCart == false && A05_Einkaufsliste_Client.globalShoppingList.List[ActiveID].bought == false) {
            ActiveButton.classList.add("fa-cart-shopping");
            ActiveButton.classList.remove("fa-circle");
            A05_Einkaufsliste_Client.globalShoppingList.List[ActiveID].inCart = true;
        }
        else if (A05_Einkaufsliste_Client.globalShoppingList.List[ActiveID].inCart == true && A05_Einkaufsliste_Client.globalShoppingList.List[ActiveID].bought == false) {
            ActiveButton.classList.add("fa-check");
            ActiveButton.classList.remove("fa-cart-shopping");
            A05_Einkaufsliste_Client.globalShoppingList.List[ActiveID].bought = true;
        }
        else {
            ActiveButton.classList.add("fa-circle");
            ActiveButton.classList.remove("fa-check");
            A05_Einkaufsliste_Client.globalShoppingList.List[ActiveID].inCart = false;
            A05_Einkaufsliste_Client.globalShoppingList.List[ActiveID].bought = false;
        }
        A05_Einkaufsliste_Client.updateJSON();
    }
    function getButtonID() {
        let activeItem = document.querySelector(".button:hover").getAttribute("id");
        let activeItemIDString = activeItem.split("_");
        let activeID = activeItemIDString[1];
        return activeID;
    }
})(A05_Einkaufsliste_Client || (A05_Einkaufsliste_Client = {}));
//# sourceMappingURL=GenerateContent.js.map
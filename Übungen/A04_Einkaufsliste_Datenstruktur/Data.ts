namespace A04_EinkaufslisteDatenstruktur
{
    export interface ShoppingItem
    {
        product: string;
        quantity: number;
        comment: string;
        inCart: boolean;
        bought: boolean;
        lastPurchase: string;
    }
    export interface ShoppingList
    {
        [name: string]: ShoppingItem[];
    }
    export let shoppingList: ShoppingList = 
    {
        Liste: 
        [
            {
                product: "Äpfel",
                quantity: 10,
                comment: "Bio-Äpfel",
                inCart: false,
                bought: false,
                lastPurchase: "05.11.2022",
            }
            {
                product: "Milch",
                quantity: 1,
                comment: "-",
                inCart: false,
                bought: false,
                lastPurchase: "05.11.2022"
            }
            {
                product: "Salat",
                quantity: 2,
                comment: "Kopfsalat",
                inCart: false,
                bought: false,
                lastPurchase: "05.11.2022"
            }
        ]
    };
}
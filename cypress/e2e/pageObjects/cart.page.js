import Page from "./page";
/**
 * sub page containing specific selectors and methods for a products page
 */
 class SauceLabsCart extends Page{
    /**
     * define selectors using getter methods 
     */
    get divInventoryItemName() {
        return (`.inventory_item_name`);
    }

    get btnCheckout() {
        return (`#checkout`);
    }   

    /**
     * methods to encapsule automation code to interact with the products page
     */
  
    

}

module.exports = new SauceLabsCart();

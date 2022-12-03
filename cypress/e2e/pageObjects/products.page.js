import Page from "./page";
/**
 * sub page containing specific selectors and methods for a products page
 */
 class SauceLabsProduct extends Page{
    /**
     * define selectors using getter methods 
     */
    get linkLogout() {
        return (`#logout_sidebar_link`);
    }

    // get linkShoppingCart() {
    //     return (`.shopping_cart_link`);
    // }

    get btnAddBackpackToCart(){
        return (`#add-to-cart-sauce-labs-backpack`);
    }

    get btnRemoveBackpackFromCart(){
        return (`#remove-sauce-labs-backpack`);
    }


    get selectSortDropDown() { 
        return ('.product_sort_container');
    }

    get itemsName() { 
        return ('.inventory_item_name');
    }

    get itemsPrice() {
         return ('.inventory_item_price');
    }
   

    /**
     * methods to encapsule automation code to interact with the products page
     */
  
     addToCart(itemName){
        let addToCartBtn = `#add-to-cart-${this.applySelectorFormat(itemName)}`

        cy.get(addToCartBtn).should('be.visible')
        cy.get(addToCartBtn).click()
    }

    removeFromCart(itemName){
        let removeFromCartBtn = `#remove-${this.applySelectorFormat(itemName)}`

        cy.get(removeFromCartBtn).should('be.visible')
        cy.get(removeFromCartBtn).click()
    }

    applySelectorFormat(itemName){
        return itemName.toLowerCase().replaceAll(' ', '-')
    }

    navigateToCart(){
        cy.get(this.linkShoppingCart).click()
    }

    selectSortOption(option){
        cy.get(this.selectSortDropDown).select(option)
    }
}

module.exports = new SauceLabsProduct();

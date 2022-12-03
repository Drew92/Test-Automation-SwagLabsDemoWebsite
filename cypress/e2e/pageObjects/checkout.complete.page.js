import Page from "./page";
/**
 * sub page containing specific selectors and methods for a products page
 */
 class SauceLabsCheckoutComplete extends Page{
    /**
     * define selectors using getter methods 
     */
 
  

    get h2OrderCompleteBanner() {
        return (`.complete-header`);
    }

    get btnBackHome() {
        return (`#back-to-products`);
    }

   

    /**
     * methods to encapsule automation code to interact with the products page
     */
  
    

}

module.exports = new SauceLabsCheckoutComplete ();

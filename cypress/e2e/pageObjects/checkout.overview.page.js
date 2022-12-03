import Page from "./page";
import  productData from "../data/sauce.products";
/**
 * sub page containing specific selectors and methods for a products page
 */
 class SauceLabsCheckoutOverview extends Page{
    /**
     * define selectors using getter methods 
     */
 
    get divSubTotal() {
        return (`.summary_subtotal_label`);
    }

    get divTax() {
        return (`.summary_tax_label`);
    }

    get divTotal() {
        return (`.summary_total_label`);
    }

    get btnFinish() {
        return (`#finish`);
    }

   

    /**
     * methods to encapsule automation code to interact with the products page
     */
  
    calculateTax(subTotal){
         //const x=subTotal*productData.taxRate;
         return (subTotal*productData.taxRate).toFixed(2); //x.toFixed(2);
    }

    calculateTatal(tax,subtotal){
        
    }

}

module.exports = new SauceLabsCheckoutOverview ();

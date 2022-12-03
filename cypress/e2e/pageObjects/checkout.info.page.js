import Page from "./page";
/**
 * sub page containing specific selectors and methods for a products page
 */
 class SauceLabsCheckoutInfo extends Page{
    /**
     * define selectors using getter methods 
     */
    get inputFirstName() {
        return (`#first-name`);
    }

    get inputLastName() {
        return (`#last-name`);
    }

    get inputPostalCode() {
        return (`#postal-code`);
    }

    get btnContinue() {
        return (`#continue`);
    }

    get h3ErrorMessage(){
        return (`h3[data-test='error']`);
    }

   

    /**
     * methods to encapsule automation code to interact with the products page
     */
  
    completeCheckoutForm(fname,lname,zipcode){
        cy.get(this.inputFirstName).type(fname);
        cy.get(this.inputLastName).type(lname);
        cy.get(this.inputPostalCode).type(zipcode);
        cy.get(this.btnContinue).click();
    }

    completeCheckoutFormWithoutLastName(fname,zipcode){
        cy.get(this.inputFirstName).type(fname);
        cy.get(this.inputPostalCode).type(zipcode);
        cy.get(this.btnContinue).click();
    }

    completeCheckoutFormWithoutZipCode(fname,lname){
        cy.get(this.inputFirstName).type(fname);
        cy.get(this.inputLastName).type(lname);
        cy.get(this.btnContinue).click();
    }
    

}

module.exports = new SauceLabsCheckoutInfo();

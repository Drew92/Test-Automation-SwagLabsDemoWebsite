import Page from "./page";
/**
 * sub page containing specific selectors and methods for a login page
 */
 class SauceLabsLogin extends Page{
    /**
     * define selectors using getter methods 
     */
    get inputUsername() {
        return (`#user-name`);
    }

    get inputPassword () {
        return (`#password`);
    }

    get btnLogin(){
        return (`#login-button`);
    }

/**
     * methods to encapsule automation code to interact with the login page
     */
  

    signIn (userName,password)
    {
        cy.get(this.inputUsername).type(userName);
        cy.get(this.inputPassword).type(password);
        cy.get(this.btnLogin).click();
    }


}

module.exports = new SauceLabsLogin();

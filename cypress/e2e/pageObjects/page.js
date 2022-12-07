module.exports = class Page {
  

     get linkShoppingCart() {
        return (`.shopping_cart_link`);
    }

    get spanShoppingCartBadge() {
        return (`.shopping_cart_badge`);
    }

    open () {
        cy.clearCookies(); //clears session cookies in browser before going the website
        return cy.visit(`/`);
    }

}
module.exports = class Page {
  

     get linkShoppingCart() {
        return (`.shopping_cart_link`);
    }

    get spanShoppingCartBadge() {
        return (`.shopping_cart_badge`);
    }

    open () {
        return cy.visit(`https://www.saucedemo.com/`);
    }

}
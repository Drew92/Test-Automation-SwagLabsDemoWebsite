/// <reference types="cypress" />

import SauceLabsLogin from '../pageObjects/login.page'
import SauceLabsProduct from '../pageObjects/products.page'
import userCredentials from '../data/user.logins'
import SauceLabsCart from '../pageObjects/cart.page'

describe('Sauce Labs Demo - Remove Items Tests', () => {

    beforeEach(() => {
        SauceLabsLogin.open();
        SauceLabsLogin.signIn(userCredentials[0].userName,userCredentials[0].password);
    });

    it('remove Backpack from cart', () => {
        
        SauceLabsProduct.addToCart('Sauce Labs Backpack');
        SauceLabsProduct.navigateToCart();
        cy.get(SauceLabsCart.divInventoryItemName).should(`contain.text`,'Labs Backpack');
        SauceLabsProduct.removeFromCart('Sauce Labs Backpack');
        cy.get(SauceLabsCart.divInventoryItemName).should(`not.exist`);

    });

    it('remove Backpack from product list page', () => {

        //add item to cart
        SauceLabsProduct.addToCart('Sauce Labs Backpack');
        cy.get(SauceLabsProduct.btnAddBackpackToCart).should(`not.exist`);
       
        //remove item from product list
        SauceLabsProduct.removeFromCart('Sauce Labs Backpack');
        cy.get(SauceLabsProduct.btnAddBackpackToCart).should(`exist`);
        cy.get(SauceLabsProduct.btnRemoveBackpackFromCart).should(`not.exist`);
    });
});
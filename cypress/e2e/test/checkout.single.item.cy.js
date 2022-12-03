/// <reference types="cypress" />

import userCredentials from '../data/user.logins'
import productData from '../data/sauce.products'
import SauceLabsLogin from '../pageObjects/login.page'
import SauceLabsProductPage from '../pageObjects/products.page'
import SauceLabsCart from '../pageObjects/cart.page'
import SauceLabsCheckoutInfo from '../pageObjects/checkout.info.page'
import SauceLabsCheckoutOverview from '../pageObjects/checkout.overview.page'
import SauceLabsCheckoutComplete from '../pageObjects/checkout.complete.page'
import { faker } from '@faker-js/faker';


describe('Sauce Labs Demo - Checkout workflow for single item', () => {

    beforeEach(() => {
        SauceLabsLogin.open();
        SauceLabsLogin.signIn(userCredentials[0].userName,userCredentials[0].password);
    });       

    it(`should do complete checkout for sauce labs backpack`, () => {
      
        //add an item from product list to cart
        SauceLabsProductPage.addToCart(productData.productList[0].name);
        SauceLabsProductPage.navigateToCart();

        cy.get(SauceLabsProductPage.spanShoppingCartBadge)
        .should('exist');

        cy.get(SauceLabsProductPage.spanShoppingCartBadge) // check that an item is in the cart
        .should('have.text',1);

        cy.get(SauceLabsCart.btnCheckout).click();
        SauceLabsCheckoutInfo.completeCheckoutForm(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode()); //enter customer info in checkout form

        //calculate costs and assert that they match what is displayed
        const subTotal=productData.productList[0].price;
        const tax=SauceLabsCheckoutOverview.calculateTax(subTotal);

        cy.get(SauceLabsCheckoutOverview.divSubTotal)
        .should('contain.text',subTotal);
        
        cy.get(SauceLabsCheckoutOverview.divTax)
        .should('contain.text',tax);
 
        cy.get(SauceLabsCheckoutOverview.divTotal)
        .should('contain.text',
                (parseFloat(tax) + 
                parseFloat(subTotal))
        );

        cy.get(SauceLabsCheckoutOverview.btnFinish).click();

        cy.get(SauceLabsCheckoutComplete.h2OrderCompleteBanner).should('be.visible');
    });



});
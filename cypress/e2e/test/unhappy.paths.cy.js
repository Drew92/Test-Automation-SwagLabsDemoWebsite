/// <reference types="cypress" />

import userCredentials from '../data/user.logins'
import productData from '../data/sauce.products'
import SauceLabsLogin from '../pageObjects/login.page'
import SauceLabsProductPage from '../pageObjects/products.page'
import SauceLabsCart from '../pageObjects/cart.page'
import SauceLabsCheckoutInfo from '../pageObjects/checkout.info.page'
import { faker } from '@faker-js/faker';


describe('Sauce Labs Demo - Unhappy paths - Check out info', () => {

    beforeEach(() => {
        SauceLabsLogin.open();
        SauceLabsLogin.signIn(userCredentials[0].userName,userCredentials[0].password);

         //add an item from product list to cart
         SauceLabsProductPage.addToCart(productData.productList[0].name);
         SauceLabsProductPage.navigateToCart(); 
         cy.get(SauceLabsCart.btnCheckout).click();
    });       

    it(`should require a last name to be entered when checking out an item`, () => {
      
        SauceLabsCheckoutInfo.completeCheckoutFormWithoutLastName(faker.name.firstName(),faker.address.zipCode()); //enter customer info in checkout form

        cy.get(SauceLabsCheckoutInfo.h3ErrorMessage)
        .should('exist');

        cy.get(SauceLabsCheckoutInfo.h3ErrorMessage)
        .should('contain.text','Error: Last Name is required');
                    
    });

    it(`should require a zip code to be entered when checking out an item`, () => {
    
        SauceLabsCheckoutInfo.completeCheckoutFormWithoutZipCode(faker.name.firstName(),faker.name.lastName()); //enter customer info in checkout form

        cy.get(SauceLabsCheckoutInfo.h3ErrorMessage)
        .should('exist');

        cy.get(SauceLabsCheckoutInfo.h3ErrorMessage)
        .should('contain.text','Error: Postal Code is required');
                    
    });

});

describe('Sauce Labs Demo - Unhappy paths - Login', () => {

    it(`should fail to login with 'invalid_user' as the username`, () => {
  
        SauceLabsLogin.open();
        SauceLabsLogin.signIn('invalid_user','secret_sauce');
        
        cy.get(SauceLabsLogin.h3ErrorMessage)
        .should('exist');

        cy.get(SauceLabsLogin.h3ErrorMessage)
        .should('contain.text','Epic sadface: Username and password do not match any user in this service');
       
    });

});
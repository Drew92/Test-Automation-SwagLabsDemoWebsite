/// <reference types="cypress" />

import SauceLabsLogin from '../pageObjects/login.page'
import SauceLabsProduct from '../pageObjects/products.page'
import userCredentials from '../data/user.logins'


describe('Sauce Labs Demo - Data Driven Login', () => {

    beforeEach(() => {
        SauceLabsLogin.open();
      });

    for (const user of userCredentials){


        it(`should attempt to login with user ${user.userName}`, () => {
  
            SauceLabsLogin.signIn(user.userName,user.password);
            
            if(user.hasAccess){
                cy.get(SauceLabsProduct.linkLogout).should('exist');
            }else{
                cy.get(SauceLabsProduct.linkLogout).should('not.exist');
            }
        });
    }

  });
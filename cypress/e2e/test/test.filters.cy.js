/// <reference types="cypress" />

import SauceLabsLogin from '../pageObjects/login.page'
import SauceLabsProductPage from '../pageObjects/products.page'
import userCredentials from '../data/user.logins'
import productData from '../data/sauce.products'

describe('Sauce Labs Demo - Filter/Sorting Tests', () => {

    beforeEach(() => {
        SauceLabsLogin.open();
        SauceLabsLogin.signIn(userCredentials[0].userName,userCredentials[0].password);
    });       

    it(`should sort items from A to Z`, () => {

        SauceLabsProductPage.selectSortOption(productData.sort['A to Z']);
        productData.productList.sort();
        
        cy.get(SauceLabsProductPage.itemsName).each(($elem, index) => {
            expect($elem.text()).equal(productData.productList[index].name)
        });
    });

    it(`should sort items from Z to A`, () => {

        SauceLabsProductPage.selectSortOption(productData.sort['Z to A']);
        productData.productList.sort().reverse();
        
        cy.get(SauceLabsProductPage.itemsName).each(($elem, index) => {
            expect($elem.text()).equal(productData.productList[index].name)
        });
    });

    it(`should sort items based on Price, Low to High`, () => {

        SauceLabsProductPage.selectSortOption(productData.sort['Low to High'])

        // Sort data list based on price, from low to high
        productData.productList.sort((a, b) => a.price - b.price)

        cy.get(SauceLabsProductPage.itemsPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${productData.productList[index].price}`)
        })

    });

    it(`should sort items based on Price, High to Low`, () => {

        SauceLabsProductPage.selectSortOption(productData.sort['High to Low'])

        // Sort data list based on price, from high to low
        productData.productList.sort((a, b) => b.price - a.price)


        cy.get(SauceLabsProductPage.itemsPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${productData.productList[index].price}`)
        })

    });
  

  });

# **SWAG**LABS Website Test Automation

### Website URL: https://www.saucedemo.com/

A Cypress test automation project for the SWAGLABS (demo) website. 
This project executes the following workflows: 

* Data-driven login
* Checkout Workflow:
    - Single item
    - Multiple items
* Sorting product list page
* Remove item from:
    - Cart
    - Product list page

The project also contains some Negative Tests and uses the `NPM Faker` package.

## Instructions
- Navigate to the project's root directory in your Terminal.
- Enter the command `npm install` to initialize the project.
- Enter one of the given commands to run the respective test.

### Commands
- To execute the "data-driven login" test: `npm run data-driven-login`
- To execute the "checkout single item workflow" test: `npm run checkout-single`
- To execute the "checkout multiple items workflow" test: `npm run checkout-multiple`
- To execute the "sort product list page" test: `npm run sort-test`
- To execute the "remove item from cart and product list" test: `npm run remove-item`
- To execute the "negative" tests: `npm run unhappy-paths`

NB. Each command has the `--headed` option to display the tests executing in the browser.



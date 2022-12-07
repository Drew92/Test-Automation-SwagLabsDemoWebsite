const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false,  //used to stop the "Cannot set property message of which has only a getter" bug from occouring during test execution
    baseUrl:'https://www.saucedemo.com/',
  },
});

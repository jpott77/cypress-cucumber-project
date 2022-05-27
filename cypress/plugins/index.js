const {preprocessor}= require("@badeball/cypress-cucumber-preprocessor/browserify");
const browserify = require("@cypress/browserify-preprocessor").defaultOptions;
  
  /**
   * @type {Cypress.PluginConfig}
   */
  module.exports = (on, config) => {
    on(
      "file:preprocessor",
      preprocessor(config, {...browserify,})
    );
    return config;
  };
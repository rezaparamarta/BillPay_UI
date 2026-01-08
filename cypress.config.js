const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://gauravkhurana.in/practise-api/ui/",
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    screenshotOnRunFailure: false,
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
});

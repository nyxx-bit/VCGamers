const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://app.vcgamers.com/',
    viewportHeight : 720,
    viewportWidth : 1280
  },
});

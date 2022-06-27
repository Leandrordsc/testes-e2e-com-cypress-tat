const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 10000,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    //experimentalStudio: true

    env: {
      viewportWidthBreakpoint: 768
    }


  }

})

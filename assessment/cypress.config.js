
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementing node event listeners
      on("task", {
        myCustomTask(data) {
          console.log("Custom task executed with data:", data);
          return null; // return a value if needed
        },
      });
    },
  },
});

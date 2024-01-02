const cypress = require('cypress');
const fs = require('fs');
require('dotenv').config();
console.log(process.env.USER_LINK_SUBMISSION)
// Replace 'https://example.com' with the actual URL
const fileContent = fs.readFileync('./cypress/e2e/spec.cy.js', 'utf8');
const updatedContent = fileContent.replace("https://crio-1232sadhana-me-qtify-6wfxoybll-sadhana-jadhavs-projects.vercel.app ", process.env.USER_LINK_SUBMISSION);
fs.writeFileSync('./cypress/e2e/spec.cy.js', updatedContent);

// Run Cypress tests
cypress.run().then((results) => {
  fs.writeFileSync('cypressResults.json', JSON.stringify(results, null, 2));
}).catch((err) => {
  console.error(err);
});

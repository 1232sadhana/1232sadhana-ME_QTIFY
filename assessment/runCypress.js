const cypress = require('cypress');
const fs = require('fs').promises;
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.USER_LINK_SUBMISSION);

async function runCypress() {
  try {
    const filePath = './cypress/e2e/spec.cy.js';
    let fileContent = await fs.readFile(filePath, 'utf8');

    const updatedContent = fileContent.replace("https://crio-1232sadhana-me-qtify-2cdo4klzl-sadhana-jadhavs-projects.vercel.app", process.env.USER_LINK_SUBMISSION);

    await fs.writeFile(filePath, updatedContent);

    const results = await cypress.run();
    await fs.writeFile('cypressResults.json', JSON.stringify(results, null, 2));

    console.log('Cypress tests completed successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
runCypress();

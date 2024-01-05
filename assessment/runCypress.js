import cypress from 'cypress';
import { promises as fsPromises } from 'fs';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.USER_LINK_SUBMISSION);

async function runCypress() {
  try {
    const filePath = './cypress/e2e/spec.cy.js';
    let fileContent = await fsPromises.readFile(filePath, 'utf8');

    const updatedContent = fileContent.replace("https://crio-1232sadhana-me-qtify-eh8kaoz6v-sadhana-jadhavs-projects.vercel.app", process.env.USER_LINK_SUBMISSION);
    
    await fsPromises.writeFile(filePath, updatedContent);

    const results = await cypress.run();
    await fsPromises.writeFile('cypressResults.json', JSON.stringify(results, null, 2));

    console.log('Cypress tests completed successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
runCypress();

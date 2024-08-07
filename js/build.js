const fs = require('fs');
const path = require('path');
require('dotenv').config();

const filePath = path.join(__dirname, 'fetchData.js');
const fileContent = fs.readFileSync(filePath, 'utf8');

const replacedContent = fileContent
  .replace('NEWS_API_KEY_PLACEHOLDER', process.env.NEWS_API_KEY)
  .replace('METEOMATICS_USERNAME_PLACEHOLDER', process.env.METEOMATICS_USERNAME)
  .replace('METEOMATICS_PASSWORD_PLACEHOLDER', process.env.METEOMATICS_PASSWORD);

fs.writeFileSync(filePath, replacedContent);

console.log('Placeholders replaced with actual values.');
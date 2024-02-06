// Make sure to install the 'request' module first: npm install request
const request = require('request');
const fs = require('fs');

// Get the URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Check if both URL and file path are provided
if (!url || !filePath) {
  console.error('Please provide both URL and file path as arguments.');
  process.exit(1);
}

// Make the GET request
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    // Write the response body to the specified file
    fs.writeFileSync(filePath, body, 'utf-8');
    console.log(`Content successfully written to ${filePath}`);
  }
});

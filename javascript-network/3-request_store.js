const fs = require('fs');
const request = require('request');

if (process.argv.length < 4) {
  console.error('Usage: node 3-request_store.js <url> <file_path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

request(url, { encoding: null }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
    process.exit(1);
  }

  const contentType = response.headers['content-type'];
  if (!contentType.startsWith('text/html')) {
    console.error(`Unsupported content type: ${contentType}`);
    process.exit(1);
  }

  fs.writeFile(filePath, body.toString('utf8'), (error) => {
    if (error) {
      console.error('Error:', error);
      process.exit(1);
    }

    console.log(`Successfully stored response in ${filePath}`);
  });
});

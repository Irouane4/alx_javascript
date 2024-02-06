// Make sure to install the 'request' module first: npm install request
const request = require('request');

// Get the Movie ID from command line arguments
const movieId = process.argv[2];

// Check if the Movie ID is provided
if (!movieId) {
  console.error('Please provide a Movie ID as the first argument.');
  process.exit(1);
}

// Construct the API endpoint URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make the request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      // Parse the JSON response
      const movieData = JSON.parse(body);

      // Display the characters of the movie
      movieData.characters.forEach((characterUrl) => {
        request.get(characterUrl, (characterError, characterResponse, characterBody) => {
          if (characterError) {
            console.error('Error:', characterError.message);
          } else {
            const characterData = JSON.parse(characterBody);
            console.log(characterData.name);
          }
        });
      });
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});

// Make sure to install the 'request' module first: npm install request
const request = require('request');

// Get the movie ID from command line arguments
const movieId = process.argv[2];

// Check if the movie ID is provided
if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

// Define the Star Wars API endpoint
const swapiEndpoint = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make the GET request to the Star Wars API
request.get(swapiEndpoint, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      // Parse the JSON response
      const movieData = JSON.parse(body);

      // Display the title of the movie
      console.log(movieData.title);
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError.message);
    }
  }
});

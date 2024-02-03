const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/planets/1/`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`An error occurred: ${error}`);
    process.exit(1);
  }

  const movie = JSON.parse(body);
  console.log(`Title: ${movie.title}`);
});

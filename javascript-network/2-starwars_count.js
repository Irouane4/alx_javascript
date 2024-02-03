const request = require('request');

const apiUrl = process.argv[2];

const wedgeAntillesId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`An error occurred: ${error}`);
    process.exit(1);
  }

  const films = JSON.parse(body).results;

  let count = 0;

  films.forEach(film => {
    request.get(film.characters[0], (error, response, body) => {
      if (error) {
        console.error(`An error occurred: ${error}`);
        process.exit(1);
      }

      const characters = JSON.parse(body);

      if (characters.some(character => character.id === wedgeAntillesId)) {
        count++;
      }
    });
  });

  console.log(`Number of movies with Wedge Antilles: ${count}`);
});

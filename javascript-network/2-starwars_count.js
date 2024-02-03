const request = require('request');

const apiUrl = process.argv[2];
const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      const filmsData = JSON.parse(body);

      const filmsWithWedge = filmsData.results.filter((film) => {
        const characters = film.characters.map((characterUrl) =>
          characterUrl.split('/').slice(-2, -1)[0]
        );
        return characters.includes('18');
      });

      console.log(filmsWithWedge.length);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});

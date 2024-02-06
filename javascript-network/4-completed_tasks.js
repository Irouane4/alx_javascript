// Make sure to install the 'request' module first: npm install request
const request = require('request');

// Get the API URL from command line arguments
const apiUrl = process.argv[2];

// Check if the API URL is provided
if (!apiUrl) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

// Make the request to the JSONPlaceholder API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      // Parse the JSON response
      const todosData = JSON.parse(body);

      // Filter completed tasks and count them for each user
      const completedTasksCount = todosData.reduce((result, todo) => {
        if (todo.completed) {
          result[todo.userId] = (result[todo.userId] || 0) + 1;
        }
        return result;
      }, {});

      // Display the number of completed tasks for each user
      console.log(completedTasksCount);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});

// Dependencies
const express = require('express');

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
// Data
const lunches = [
  {
    lunch: 'Beet & Goat Cheese Salad with minestrone soup.',
  },
  {
    lunch: 'Pizza, two double veggie burgers, fries with a Big Gulp',
  },
];


app.get('/template', (req, res) => {

  function generateMainTemplate(body) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Some other Title</title>
      </head>
      <body>
        <header>Header from main. template</header>
        ${body}
      </body>
    </html>
    `
  }

  function generateView(data){
    return `
    <p>This is from view template</p>
    <h1>The lunch today is: <br>${data.lunch}</h1>
    `
  }
  const view = generateView({lunch: 'pizza'});
  const website = generateMainTemplate(view)
  res.send(website)
})

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

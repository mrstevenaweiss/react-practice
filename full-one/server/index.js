//
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var db = require('./database');

// gives us information if we are working in production or development
const ENV = process.env.NODE_ENV;

// which port will our express server be running on
const PORT = process.env.PORT || 5000;

// intialize express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/cities', require('./api/cities'));
app.use('/api/weather', require('./api/weather'));

// add code to make express responsive to requests
// express listen on a port of our server.  when a request is made, express middleware will respond to the requests
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

db.query('SELECT NOW()', (err, res) => {
  if (err.error)
    return console.log(err.error);
  console.log(`PostgreSQL connected: ${res[0].now}.`);
});

module.exports = app

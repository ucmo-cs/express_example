const mysql = require("mysql");
const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes')
const bodyParser = require('body-parser');

// Make sure we parse rqeuests as JSON.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static routes come from the ./client directory
app.use(express.static('client/build'))
app.use(express.static('client/build/static'))

// Use the Express routes in routes.js
app.use('/', routes);

// Start the server
app.listen( port , () => console.log(`Server started, listening on port: ${port}`));

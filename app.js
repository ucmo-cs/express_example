const mysql = require("mysql");
const express = require('express')
const app = express()
const port = 8080
const routes = require('./routes')
const bodyParser = require('body-parser');

//Database connection
//app.use(function(req, res, next){
//    res.locals.connection = mysql.createConnection({
//        host     : 'www.math-cs.ucmo.edu',
//        user     : 'spring_example',
//        password : 'letmein',
//        database : 'spring_example'
//    });
//    res.locals.connection.connect();
//    next();
//});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client'))

app.use('/', routes);

app.listen( port , () => console.log(`Server started, listening on port: ${port}`));

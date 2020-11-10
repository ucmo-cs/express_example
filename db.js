'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'www.math-cs.ucmo.edu',
    user     : 'spring_example',
    password : 'letmein',
    database : 'spring_example'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

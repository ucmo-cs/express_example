const express = require('express'),
  router = express.Router();
  db = require('./db');
  path = require("path");

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

// get car list
router.get('/cars', function(req, res) {
  let sql = `SELECT * FROM car`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
    })
  });

// create new car
router.post('/cars', function(req, res) {
  let sql = `INSERT INTO car(make, model, year) VALUES (?)`;
  let values = [
    req.body.make,
    req.body.model,
    req.body.year    
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

module.exports = router;

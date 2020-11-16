const express = require('express'),
  router = express.Router();
  db = require('./db');
  path = require("path");

// Static route for index.html
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// get car list
router.get('/cars', function(req, res) {
  let sql = `SELECT * FROM car`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
    })
  });

// get car by id (uses a URL like localhost:8080/car/1 where 1 is id)
router.get('/cars/:id', function(req, res) {
  const { id } = req.params;
  let sql = `SELECT * FROM car WHERE ID=(?)`;
  db.query(sql, [id], function(err, data, fields) {
    if (err) throw err;
    var [ item ] = data;
    res.json(item)
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

// Update a car (uses a URL like localhost:8080/car/1 where 1 is id)
router.put('/cars/:id', function(req,res) {
  const { id } = req.params;
  let sql = `UPDATE car SET make = (?), model = (?), year = (?) WHERE ID=(?)`;
  let values = [
    req.body.make,
    req.body.model,
    req.body.year,
    id
  ];
  db.query(sql, values, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

// Delete a car  (uses a URL like localhost:8080/car/1 where 1 is id)
router.delete('/cars/:id', function(req,res) {
  const { id } = req.params;
  let sql = `DELETE FROM car WHERE ID=(?)`;
  db.query(sql, [id], function(err, data, fields) {
    if (err) throw err;
    res.json(data);
  })
});

module.exports = router;

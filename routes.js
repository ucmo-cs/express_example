const express = require('express'),
  router = express.Router();
  db = require('./db');
  path = require("path");

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

// get user lists
router.get('/cars', function(req, res) {
  let sql = `SELECT * FROM car`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
    })
  });

module.exports = router;

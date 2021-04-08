var express = require('express');
var router = express.Router();
var con = require('../dbConfig');

router.post('/', function(req, res, next) {
  var text = req.body.mytext;
  var name = req.body.myname;
  if(text != undefined){
    con.query('INSERT INTO `form_entries` (name, text) VALUES (?,?)',[name, text] ,function(err, result){
    if(err) throw err;
    console.log("This data : " + text + " was inserted in the database");
    })
  }
  res.redirect("http://localhost:3000/showdbentries");
});

module.exports = router;
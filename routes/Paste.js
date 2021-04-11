var express = require('express');
var router = express.Router();
var con = require('../dbConfig');

router.get('/', function(req, res,next){
    res.render('Paste', {title : "PasteBinClone"})
})

router.get('/list',function(req, res) {
    var sql = "SELECT name, text_entries FROM user"
    con.query(sql, function(err, results, fields){
        if(err) throw err
        console.log(results);
        res.render('Public_Pastes', {results});
    })
})

router.post('/',function (req, res) {
  var text = req.body.mytext;
  var name = req.body.myname;
  if(text != undefined){
    con.query('INSERT INTO `user` (name, text_entries) VALUES (?,?)',[name, text] ,function(err, result){
    if(err) throw err;
    console.log("This data : " + text + " was inserted in the database");
    })
  }
  res.redirect("/Paste/list");
});
    

module.exports = router;
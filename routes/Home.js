var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('Home');
})

router.get('/', function(req, res, next) {
    var text = req.body.mytext;
    var name = req.body.myname;
    if(text != undefined){
      con.query('INSERT INTO `user` (name, text_entries) VALUES (?,?)',[name, text] ,function(err, result){
      if(err) throw err;
      console.log("This data : " + text + " was inserted in the database");
      })
    }
    res.redirect("http://localhost:3000/Public_Pastes");
  });

module.exports = router;
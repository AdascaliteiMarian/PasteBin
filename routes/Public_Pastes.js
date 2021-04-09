var con = require('../dbConfig');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res,next){
    var sql = "SELECT name, text_entries FROM user"
    con.query(sql, function(err, results, fields){
        if(err) throw err
        console.log(results);
        res.render('Public_Pastes', {results});
    })
})

module.exports = router;
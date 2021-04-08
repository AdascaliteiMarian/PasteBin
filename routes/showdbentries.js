var express = require('express');
var router = express.Router();
var con = require('../dbConfig');

router.get('/', function(req, res,next){
    var sql = "SELECT name, text FROM form_entries"
    con.query(sql, function(err, results, fields){
        if(err) throw err
        console.log(results);
        res.render('showdbentries', {results});
    })
})

module.exports = router;
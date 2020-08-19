var express = require('express');
var router = express.Router();
const connection = require('../bin/db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create',function(req,res){
  res.render('create')
})

router.post('/create',function(req,res){
  connection.query(`insert into bookquotes(author,title,contents) values('${req.body.author}','${req.body.booktitle}','${req.body.book_contents}')`, function(err, rows, fields) {
    if (err) throw err;
    res.redirect('/')
  });
})

// router.post('/create',function(req,res){
//   if(req.body.author && req.body.booktitle && req.body.book_contents){
//   connection.query(`insert into bookquotes(author,title,contents) values('${req.body.author}','${req.body.booktitle}','${req.body.book_contents}')`, function(err, rows, fields) {
//     if (err) throw err;
//     res.redirect('/')
//   });}
//   else { //db d
//     res.redirect('/create')
//   }
// })

module.exports = router;

var express = require('express');
var router = express.Router();
const connection = require('../bin/db.js');
const { rollback } = require('../bin/db.js');

router.get('/', function(req, res, next) {
	connection.query(`SELECT id, author, title, contents, \`like\`, date_format(date, '%d %b, %Y') AS date from bookquotes ORDER BY id DESC;`, (err,rows,fields)=>{
	  res.render('index', {rows:rows});
	})
  });

router.get('/create',function(req,res){
  res.render('create',{ 
		pageTitle: 'Write new post',
        action: '/create',
        title: '',
        author: '',
        contents: '',
        id: ''
    })
})

router.post('/create',function(req,res){
  connection.query(`INSERT INTO bookquotes(author,title,contents) VALUES('${req.body.author}','${req.body.bookTitle}','${req.body.bookContents}')`, function(err, rows, fields) {
    if (err) throw err;
    res.redirect('/')
      });  
})

router.get('/update',function(req,res){
  connection.query(`SELECT * FROM bookquotes WHERE ID = ${req.query.id}`, (err,rows,fields)=>{
	res.render('create',{ 
		pageTitle: 'Update post',
        action: '/update',
        title: rows[0].title,
        author: rows[0].author,
        contents: rows[0].contents,
		id: rows[0].id
		})
  })
})

router.post('/update', function(req,res){
	connection.query(`UPDATE bookquotes SET author = '${req.body.author}', title = '${req.body.bookTitle}', contents= '${req.body.bookContents}' WHERE id=${req.body.id}`, function(err, rows, fields) {
		if (err) throw err;
		res.redirect('/')
	})
})

router.get('/likeupdate',function(req,res){
	const like = req.query.like;
	connection.query(`UPDATE bookquotes SET \`like\`= ${like} WHERE id =${req.query.id}`,(err,rows,fields)=>{
    	if (err) throw err;
    	res.sendStatus(200);
  	})
})


router.get('/delete',function(req,res){
	connection.query(`DELETE FROM bookquotes WHERE id=${req.query.id}`, function(err, rows, fields) {
		if (err) throw err;
		res.redirect('/')
  	})
})

module.exports = router;

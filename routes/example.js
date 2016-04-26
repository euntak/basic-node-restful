// routes/example

var express 	= require('express'),
	router 		= express.Router();


/**
* 	ROUTE http://localhost:8000/api/users
*	----------------------------------------------------------------
*	POST 	 유저 생성
*	GET	 모든 유저를 조회
*
**/
router.route('/users')

	.post(function (req, res) {
		res.json({
			message: '/users POST method',
			header : req.header,
			body : req.body
		});
	})

	.get(function (req, res) {
		res.json({
			message: '/users GET method',
			header : req.header,
			body : req.body
		});
	})

	.put(function (req, res) {
		res.json({
			message: '/users PUT method',
			header : req.header,
			body : req.body
		});
	})

	.delete(function (req, res) {
		res.json({
			message: '/users DELETE method',
			header : req.header,
			body : req.body
		});
	})

// exports module
module.exports = router;

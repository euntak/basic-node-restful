// routes/example

var express 	= require('express'),
	router 		= express.Router(),
	multer 		= require('multer');

// ===== multer setting =====
var upload = multer( );



/**
* 	ROUTE http://localhost:8000/api/users
*	----------------------------------------------------------------
*	POST 	 유저 생성
*	GET	 모든 유저를 조회
* 	PUT 	 유저 수정
* 	DELETE 유저 삭제
**/
router.route('/users')

	// upload.any() 를 통해서 form-data body를 받을 수 있다.
	.post(upload.any(), function (req, res) {
		res.json({
			message: '/users POST method',
			body : req.body
		});
	})

	.get(function (req, res) {
		res.json({
			message: '/users GET method',
			body : req.body
		});
	})

	.put(function (req, res) {
		res.json({
			message: '/users PUT method',
			body : req.body
		});
	})

	.delete(function (req, res) {
		res.json({
			message: '/users DELETE method',
			body : req.body
		});
	})

// exports module
module.exports = router;

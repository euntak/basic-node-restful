// ===== BASE SETUP =====
// x-www-form-urlencoded 방식 (body Parser)

var express 		= require('express'),
	app 			= express(),
	bodyParser 	= require('body-parser'),
	examRouter 	= require('./routes/example');

app.use(bodyParser.urlencoded( { extended : true } ) );
app.use(bodyParser.json( ) );

var port = process.env.PORT || 8000;

app.use('/api', examRouter);

app.use("*",function(req,res){
	res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
console.log('Server is running at : ' + port);
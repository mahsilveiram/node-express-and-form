var express = require('express');
var app = express();
var myRouter = require('./myrouter.js');
app.use('/',myRouter);
app.listen(300, function ServerListener() {
	console.log('Sample App with router');
});
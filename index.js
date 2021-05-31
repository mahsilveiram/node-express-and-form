var express = require('express');
var app = express();

app.use(express.static('public'));

app.use('/process_get', function handleProcessGet(request, response){
	retVal = {
		firstName: request.query.firstName,
		lastName: request.query.lastName
	};
	console.log(retVal);
	response.send(JSON.stringify(retVal));
});

var server = app.listen(300, function ServerListener() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Usisng Forms and Express, listening at http://%$:%$",host,port);
});

var express = require('express');
var app = express();

app.use(express.static('public'));

app.use('/process_get', function handleProcessGet(request, response){
	retVal = {
		// get the number
		// smaller than 2 x and stay
		//else check and
		// if prime another page says is prime -> uses routes
		//else output in the result page its prime factors
		// firstName: request.query.firstName,
		// favBook: request.query.favBook
		request.query.rate
	};
	console.log(retVal);
	response.send(JSON.stringify(retVal));
});

var server = app.listen(process.env.PORT||5000, function ServerListener() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Usisng Forms and Express, listening at http://%s:%s",host,port);
});

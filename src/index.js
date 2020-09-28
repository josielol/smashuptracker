const utilities = {
	express: require('express'),
	path: require('path'),
	define: require('amdefine')(module),
	controllers: {
		app: require('./controllers/app')
	}
};

utilities.app = utilities.express();

utilities.app.get('/', function (req, res) {
  res.sendFile(utilities.path.join(__dirname + '/index.html'));
  utilities.controllers.app.color;
});

utilities.app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
const utilities = {
	express: require('express'),
	define: require('amdefine')(module),
	controllers: {
		app: require('./controllers/app/main')
	}
};

utilities.app = utilities.express();

utilities.app.get('/', function (req, res) {
	console.log( 'loading app');
	utilities.controllers.app.run( res);
});

utilities.app.listen(3000, function () {
	console.log( 'attempting to start app');
	utilities.controllers.app.start();
	console.log('app initiated');
});
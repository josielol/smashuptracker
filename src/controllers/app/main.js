const utilities = {
	define: require('amdefine')(module),
	path: require('path'),
	controllers: {
		db: require('../../controllers/db/main')
	}
};

function runApp(res) {
	res.sendFile(utilities.path.join(__dirname + '/template.html'));
}

function startApp() {
	console.log( 'app starting');
	utilities.controllers.db.start();
}	

utilities.define(function (require) {
	const app = {
		run: runApp,
		start: startApp
	};

    return app;
});
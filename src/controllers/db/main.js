const utilities = {
	define: require('amdefine')(module),
	mongodb: require('mongodb'),
	dotenv: require('dotenv/config')
},
	mongo = {
		MongoClient: utilities.mongodb.MongoClient,
		uri: process.env.DB_CONNECTION,
		factions: require('./factions/main')
	};
	
async function completeTask(client, taskFunction) {
	let results = await taskFunction( client);
	client.close();
	console.log( 'db closed');
	return results;
}


function startDb() {
	console.log( 'attempting to start db');

	const client = new mongo.MongoClient(mongo.uri, { useNewUrlParser: true,  useUnifiedTopology: true});

	client.connect(async err => {
		console.log( 'db started');
		const factions = await completeTask( client, mongo.factions.get);
		console.log( factions);
	});	
}

utilities.define(function (require) {
    return {
    	start: startDb
    };
});
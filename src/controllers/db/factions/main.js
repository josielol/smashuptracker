const utilities = {
	define: require('amdefine')(module),
	fs: require('fs')
};

async function getFactions( client) {
	const factions = await client.db("smashup").collection("factions").find({name:{$exists: true}}).toArray();
	return factions;
}

function getFactionsList( client) {
	const factionsCollection = getFactions( client);
}


utilities.define(function (require) {
	const factions = {
		get: getFactions,
		getList: getFactionsList
	};

    return factions;
});
var express = require('express');
var app = express();

const utilities = {
	path: require('path')
};

app.get('/', function (req, res) {
  res.sendFile(utilities.path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
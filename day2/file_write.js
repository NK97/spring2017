const fs = require('fs');
fs.writeFile('hello.txt', 'Node始めました',function(err) {
	if(err) return console.log("Error!");
	});
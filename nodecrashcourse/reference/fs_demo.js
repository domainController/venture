const fs = require('fs');
const path = require('path');

/*// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
	if (err) throw err;
	console.log('Folder created....')
	});*/

// Create an write a file

fs.writeFile(path.join(__dirname, '/test', 'Supplements.txt'), 
	'Micronutrients, Proteins and Nootropics', 
	err => 
	{
		if (err) throw err;
		console.log('File written to....');
	}
);
//
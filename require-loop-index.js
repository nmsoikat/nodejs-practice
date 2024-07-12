'use strict';

const fs = require('fs');
const path = require('path');

const exportFiles = {};
const folders = [
	// path.join(__dirname, './foldername')
]

const currentFileName = path.basename(__filename);
const currentDirectory = path.join(__dirname);
const directoryFiles = fs.readdirSync(currentDirectory);

directoryFiles.forEach(fileName => {
	if (fileName !== currentFileName) {
		const requireFile = require(path.join(currentDirectory, fileName));
		if (requireFile.name) {
			exportFiles[requireFile.name] = requireFile;
		}
	}
})


module.exports = exportFiles;

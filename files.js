
const fs = require ('fs');
var json2csv = require('json2csv')


saveFile = (content, error) =>{
	if (content){
		var fields = ['Title', 'Price', 'ImageURL', 'url', 'time'];
		var csv = json2csv({ data: content, fields: fields });
	let date = new Date();
	let nowTime = date.toLocaleTimeString();
	date = date.toISOString().slice(0,10);

	fileName = './data/' + date + '.csv'

	fs.writeFile(fileName, csv,  function(err) {

  	if (err) throw err;
 	 console.log('file saved');
});
	}

	else if (error) {

	}
}

module.exports.saveFile = saveFile

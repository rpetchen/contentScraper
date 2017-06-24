const scrapeIt = require("scrape-it");
const config = require("./config.js")

var save = require("./files.js")


scrapeIt("http://www.shirts4mike.com/shirts.php", config.firstData) .then(page => {
 
	
	var shirts = page.data
	var shirtA = []

	for (var i = 0; i < shirts.length; i++){
	scrapeIt(`http://www.shirts4mike.com/${shirts[i].url}`, config.secondData, (err,page) =>{
    	shirtA.push(page)
    	save.saveFile(shirtA)
    })	

    	
		
	}

		
	})


// }).catch ((e) => {
// 	if (e.code === 'ENOENT'){
// 	console.log('Internet Connect unavailable')}
// });



// var fields = ['Title', 'price', 'ImageURL'];

// var csv = json2csv({ data: page, fields: fields });

// var fields = ['Title', 'price', 'ImageURL'];

// var csv = json2csv({ data: page, fields: fields });
 
// fs.writeFile('file.csv', csv, function(err) {
//   if (err) throw err;
//   console.log('file saved');
// });
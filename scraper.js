const scrapeIt = require("scrape-it");
const config = require("./config.js")

var save = require("./files.js")


scrapeIt("http://www.shirts4mike.com/shirts.php", config.firstData) .then(page => {
 
	
	var shirts = page.data
	var shirtA = []

	for (let i = 0; i < shirts.length; i++){

	scrapeIt(`http://www.shirts4mike.com/${shirts[i].url}`, config.secondData, (err,page) =>{
    url = shirts[i].url
    page.url = "http://www.shirts4mike.com/" + url
    page.time = new Date().toLocaleString()
   
    	shirtA.push(page)
    	if (shirtA.length === shirts.length){
    	save.saveFile(shirtA)
    }
    })	
	}
}).catch ((e) => {
	if (e.code === 'ENOENT'){
	console.log('Unable to connect to shirts4mike')}
});




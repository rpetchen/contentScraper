const scrapeIt = require("scrape-it");
const config = require("./config.js");
var save = require("./files.js");
//retrieves list of urls 
scrapeIt("http://www.shirts4mike.com/shirts.php", config.firstData).then(page => {

    var shirts = page.data;
    var shirtA = [];

    for (let i = 0; i < shirts.length; i++) {
    	//loops through list of urls and retrieves individual shirt content
        scrapeIt(`http://www.shirts4mike.com/${shirts[i].url}`, config.secondData, (err, page) => {
            page.url = "http://www.shirts4mike.com/" + shirts[i].url;
            page.time = new Date().toLocaleString();
            //push list of shirt objects to array and passes the array to saveFile when array length == length of urls
            shirtA.push(page);
            if (shirtA.length === shirts.length) {
                save.saveFile(shirtA);
            }
        });
    } //catches errors and passes them to saveFile to be saved to error log
}).catch((e) => {
    save.saveFile(undefined, e);
    if (e.code === 'ENOENT') {
        console.log('Unable to connect to shirts4mike');
    }
});


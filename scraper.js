const scrapeIt = require("scrape-it");


var firstData = {

    data: {
        listItem: ".products > li",
        data: {
            url: {
                selector: "a",
                attr: "href"
            }
        }

    }
}

var secondData = {
            Title: {
                selector: '.shirt-picture img',
                attr: 'alt'
            },
            Price: {
                selector: '.price',
                how: 'html'
            },
            ImageURL: {
                selector: '.shirt-picture img',
                attr: 'src'
            }
        }

scrapeIt("http://www.shirts4mike.com/shirts.php", firstData).then(page => {
	var shirts = page.data
	var shirtA = []

	for (i = 0; i < shirts.length; i++){
	scrapeIt(`http://www.shirts4mike.com/${shirts[i].url}`, secondData).then(page =>{
		console.log(page)
	}) 
	}
}).catch ((e) => {
	if (e.code === 'ENOENT'){
	console.log('Internet Connect unavailable')}
});
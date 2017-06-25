const fs = require('fs');
var json2csv = require('json2csv');

//create data directory if it doesn't exist
fs.access('./data', function(err) {
    if (err && err.code === 'ENOENT') {
        fs.mkdir('./data');
    }
});
//takes content or error of scraping atttempt and creates shirt or error file
saveFile = (content, error) => {
    let date = new Date();
    //formating csv content
    if (content) {
        var fields = ['Title', 'Price', 'ImageURL', 'url', 'time'];
        var csv = json2csv({
            data: content,
            fields: fields
        });

        var fileDate = date.toISOString().slice(0, 10);
        //formatting file name with timestampt and csv extension
        fileName = './data/' + fileDate + '.csv';
        //write to file
        fs.writeFile(fileName, csv, function(err) {

            if (err) throw err;
            console.log('file saved');
        });
    } else if (error) {
        //creates error log with error message and timestamp
        content = "[" + date + "]" + " " + "<" + error.message + ">\r\n";
        fs.appendFile('scraper-error.log', content, (err) => {
            if (err) throw err;
            console.log('unable to write error to file');
        });
    }
};

module.exports.saveFile = saveFile

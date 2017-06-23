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
                selector: '.price'  
            },
            ImageURL: {
                selector: '.shirt-picture img',
                attr: 'src'
            }
        }



module.exports = {
    firstData,
    secondData
}
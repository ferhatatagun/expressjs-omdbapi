//#Import
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')

//Global variable
var publicDir = global.appPublic;
var authUser = authUser || {};

router.get('/', function(req, res) {
    res.render('pages/search');
});

// list page 
router.get('/list', function(req, res) {
    const key = req.query.key;
    const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=d61dc003&s=';
    const queryString = url + key;

    const html = fetch(queryString)
    .then(res => res.json().then(data => data.Search))
    .then(parsedData => {
        
            parsedData.forEach(movie => { 
                if (parsedData !== undefined) {
                    res.render('pages/list', {
                        pageData: parsedData,
                        key: key
                    });
                } else {
                    res.render('pages/list');
                }
            });
        
    }); 
    
});

//#Export
module.exports = router;

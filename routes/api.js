var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/:zone/:volume', function(req, res, next){

    var options = {
        url: 'http://192.168.1.249/keypad.html',
        method: 'POST',
        headers: {
            'Upgrade-Insecure-Requests': '1',
            'Origin': 'http://192.168.1.249'
        },
        form: {
            SrcDropDown: req.params.zone,
            VolDropDown: req.params.volume,
            _isgrp: 0,
            _grpmsk: 0,
            _grpsrc: 0,
            _zsrc: 12,
            _cznum: 0
            }
    };

    request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})
        
});

router.get('/', function(req, res, next){
    res.send('yo');
})

module.exports = router;

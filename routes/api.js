var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/api/:zone/:volume', function(req, res, next){

    var headers = {
        'User-Agent': 'WHA/0.0.1', 
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    var options = {
        url: 'http://192.168.1.249/keypad.html',
        method: 'POST',
        headers: headers,
        data: 'SrcDropDown='+ zone + '&VolDropDown=' + volume + '&_isgrp=0&_grpmsk=0&_grpsrc=0&_zsrc=12&_cznum=0'
    };

    request(options, function(error, response, body){
        if (!error && response.statusCode == 200){
            console.log('yipee');
        }
    });
})

router.get('/api', function(req, res, next){
    res.send('yo');
})

module.exports = router;

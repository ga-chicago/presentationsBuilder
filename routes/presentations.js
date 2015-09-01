var express = require('express');
var controller = express.Router();
var presentationModel = require('../data/presentationModel');

var model = new presentationModel('WDI Vader',
    'Introduction to Node',
    ['Test ?', 'Another ?', 'Etc'],
    ['Be awesome', 'Snakes', 'why did it have to be snakes?'],
    5,
    'Snake Hunter',
    'Use Routes to create an API that returns JSON. This JSON has 3 attributes: various snake species names.');

/* GET presentation listing. */
controller.get('/', function(req, res, next) {
  res.send(model);
});

controller.post('/build', function(req, res, next) {
    res.send({status: 420});
});


module.exports = controller;

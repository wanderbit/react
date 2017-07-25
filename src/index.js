var str = require('./constant.js');
var $ = require('jquery');

var App = function() {
    console.log(str);
    $('body').html('testjq');
};

var user = new App();



import css from './css/style.less';

console.log(css);
var str = require('./constant.js');
var $ = require('jquery');

var App = function() {
    console.log(str);
    $('body').append('testjq');
    document.body.innerHTML += `<div class="${css.green}">1231</div>`;
    $('body').append('<div><input><table>');
};

var user = new App();



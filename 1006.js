var input = require('fs').readFileSync('stdin', 'utf-8');

var valores = input.split('\n');

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var MEDIA = (A * 2 + B * 3 + C * 5) / 10;

console.log('MEDIA = ' + MEDIA.toFixed(1));

var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var p1 = lines.shift();
var p2 = lines.shift();

var Arrayx1x2 = p1.split(' ');
var Arrayy1y2 = p2.split(' ');

var x1 = parseFloat(Arrayx1x2.shift());
var y1 = parseFloat(Arrayx1x2.shift());
var x2 = parseFloat(Arrayy1y2.shift());
var y2 = parseFloat(Arrayy1y2.shift());

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));

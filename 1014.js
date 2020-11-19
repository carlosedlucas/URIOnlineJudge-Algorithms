var input = require('fs').readFileSync('stdin', 'utf-8');
var valores = input.split('\n');

var X = parseInt(valores.shift());
var Y = parseFloat(valores.shift());

var consumoMedioCombustivel = X / Y;

console.log(consumoMedioCombustivel.toFixed(3) + ' km/l');

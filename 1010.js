var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');
var peca1Array = valores.shift();
var peca2Array = valores.shift();

var peca1 = peca1Array.split(' ');
var peca2 = peca2Array.split(' ');

var codPeca1 = parseFloat(peca1.shift());
var numPeca1 = parseFloat(peca1.shift());
var valorUniPeca1 = parseFloat(peca1.shift());
var codPeca2 = parseFloat(peca2.shift());
var numPeca2 = parseFloat(peca2.shift());
var valorUniPeca2 = parseFloat(peca2.shift());

var valorAPagar = numPeca1 * valorUniPeca1 + numPeca2 * valorUniPeca2;

console.log('VALOR A PAGAR = R$ ' + valorAPagar.toFixed(2));

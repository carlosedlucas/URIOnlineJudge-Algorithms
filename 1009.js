var input = require('fs').readFileSync('stdin', 'utf-8');
var valores = input.split('\n');

var nomeVendedor = valores.shift();
var salarioFixo = parseFloat(valores.shift());
var totalDeVendasEmDinheiro = parseFloat(valores.shift());

var TOTAL = totalDeVendasEmDinheiro * 0.15 + salarioFixo;

console.log('TOTAL = R$ ' + TOTAL.toFixed(2));

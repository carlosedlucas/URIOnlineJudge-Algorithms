var input = require('fs').readFileSync('stdin', 'utf-8');
var valores = input.split('\n');

var numeroFuncionario = parseFloat(valores.shift());
var numeroHorasTrabalhadas = parseFloat(valores.shift());
var valorRecebidoHora = parseFloat(valores.shift());

var SALARY = numeroHorasTrabalhadas * valorRecebidoHora;

console.log('NUMBER = ' + numeroFuncionario);
console.log('SALARY = U$ ' + SALARY.toFixed(2));

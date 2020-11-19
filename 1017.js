var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var tempo = parseInt(lines.shift());
var velocidadeKmPorHora = parseInt(lines.shift());

var litrosNecessarios = (velocidadeKmPorHora * tempo) / 12;

console.log(litrosNecessarios.toFixed(3));

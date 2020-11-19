var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var timeEntry = parseInt(lines.shift());

var horas = parseInt(timeEntry / 3600);
var minutos = parseInt((timeEntry % 3600) / 60);
var segundos = parseInt((timeEntry % 3600) - minutos * 60);

console.log(`${horas}:${minutos}:${segundos}`);

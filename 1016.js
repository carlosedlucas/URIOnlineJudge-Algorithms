var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distancia = lines.shift();

var tempo = distancia * 2;

console.log(`${tempo} minutos`);

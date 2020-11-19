var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let positive = lines.filter((number) => number > 0);
console.log(`${positive.length} valores positivos`);

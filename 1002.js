var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(input);

var area = (Math.PI.toFixed(5) * Math.pow(r, 2)).toFixed(4);

console.log('A=' + area);

var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {
  console.log('Valores aceitos');
} else {
  console.log('Valores nao aceitos');
}

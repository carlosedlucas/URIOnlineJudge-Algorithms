var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

let x = parseFloat(lines.shift());
let y = parseFloat(lines.shift());

if ((x > 0 && y > 0) || (x > 0 && y > 0)) {
  console.log('Q1');
} else if ((x < 0 && y > 0) || (x < 0 && y > 0)) {
  console.log('Q2');
} else if ((x < 0 && y < 0) || (x < 0 && y < 0)) {
  console.log('Q3');
} else if ((x > 0 && y < 0) || (x > 0 && y < 0)) {
  console.log('Q4');
} else if (x === 0 && y !== 0) {
  console.log('Eixo Y');
} else if (x !== 0 && y === 0) {
  console.log('Eixo X');
} else {
  console.log('Origem');
}

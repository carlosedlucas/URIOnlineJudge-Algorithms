var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let condition1 = A + B > C;
let condition2 = B + C > A;
let condition3 = C + A > B;
let sumSides = A + B + C;
let area = ((A + B) * C) / 2;

if (condition1 && condition2 && condition3) {
  console.log(`Perimetro = ${sumSides.toFixed(1)}`);
} else {
  console.log(`Area = ${area.toFixed(1)}`);
}

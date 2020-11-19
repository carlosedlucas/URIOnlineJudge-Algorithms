var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');
let A = lines.shift();
let B = lines.shift();
let C = lines.shift();

let delta = Math.sqrt(Math.pow(B, 2) - 4 * A * C);
let R1 = (-B + delta) / (2 * A);
let R2 = (-B - delta) / (2 * A);

if (A == 0 || Number.isNaN(delta)) {
  console.log('Impossivel calcular');
} else {
  console.log(`R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`);
}

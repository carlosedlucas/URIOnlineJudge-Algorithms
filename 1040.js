var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.replace('\n', ' ');
var split = lines.split(' ');

let n1 = parseFloat(split.shift());
let n2 = parseFloat(split.shift());
let n3 = parseFloat(split.shift());
let n4 = parseFloat(split.shift());
let n5 = parseFloat(split.shift());

let calcAverage = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;

console.log(`Media: ${calcAverage.toFixed(1)}`);

if (calcAverage >= 7) {
  console.log('Aluno aprovado.');
} else if (calcAverage < 5) {
  console.log('Aluno reprovado.');
} else {
  console.log('Aluno em exame.');
  console.log(`Nota do exame: ${n5.toFixed(1)}`);
  console.log('Aluno aprovado.');
  console.log(`Media final: ${((calcAverage + n5) / 2).toFixed(1)}`);
}

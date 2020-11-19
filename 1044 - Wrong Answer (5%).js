var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

function putDivisors(number) {
  let array = [];
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      let resultado = number / i;
      array.push(resultado);
    }
  }
  return array;
}

let newArray1 = putDivisors(A);
let newArray2 = putDivisors(B);

let verifyIfIsPrime = [];

for (i = 0; i < newArray1.length; i++) {
  if (newArray2.indexOf(newArray1[i]) > -1) {
    verifyIfIsPrime.push(newArray2);
    verifyIfIsPrime.splice(1);
  }
}

function isEmpty(obj) {
  return Object.keys(obj).length !== 0;
}

if (isEmpty(verifyIfIsPrime)) {
  console.log('Sao Multiplos');
} else {
  console.log('Nao sao Multiplos');
}

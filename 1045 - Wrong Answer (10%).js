var input = require('fs').readFileSync('stdin','utf8');
var values = input.split(' ');

function compareNumbers (a,b){
  return b-a;
}

values.sort(compareNumbers);

let A = parseFloat(values.shift());
let B = parseFloat(values.shift());
let C = parseFloat(values.shift());

if (A >= (B+C)){
  console.log('NAO FORMA TRIANGULO')
} else if (A*A == ((B*B)+ (C*C))){
  console.log('TRIANGULO RETANGULO')
} else if(A*A > ((B*B) + (C*C))){
  console.log('TRIANGULO OBTUSANGULO')
  console.log('TRIANGULO ISOSCELES')
} else if ((A*A < ((B*B) + (C*C)) && (A===B)&& (A===C))){
  console.log('TRIANGULO ACUTANGULO')
  console.log('TRIANGULO EQUILATERO')
} else {
  console.log('TRIANGULO ACUTANGULO')
  console.log('TRIANGULO ISOSCELES')
}
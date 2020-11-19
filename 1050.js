var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let dddNumber = lines.shift();

if (dddNumber == 61) {
  console.log('Brasilia');
} else if (dddNumber == 71) {
  console.log('Salvador');
} else if (dddNumber == 11) {
  console.log('Sao Paulo');
} else if (dddNumber == 21) {
  console.log('Rio de Janeiro');
} else if (dddNumber == 32) {
  console.log('Juiz de Fora');
} else if (dddNumber == 19) {
  console.log('Campinas');
} else if (dddNumber == 27) {
  console.log('Vitoria');
} else if (dddNumber == 31) {
  console.log('Belo Horizonte');
} else {
  console.log('DDD nao cadastrado');
}

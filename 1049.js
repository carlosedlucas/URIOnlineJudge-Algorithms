var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let firsW = lines.shift();
let secoW = lines.shift();
let thirW = lines.shift();

if (firsW == 'vertebrado' && secoW == 'ave' && thirW == 'carnivoro') {
  console.log('aguia');
} else if (firsW == 'vertebrado' && secoW == 'ave' && thirW == 'onivoro') {
  console.log('pomba');
} else if (firsW == 'vertebrado' && secoW == 'mamifero' && thirW == 'onivoro') {
  console.log('homem');
} else if (
  firsW == 'vertebrado' &&
  secoW == 'mamifero' &&
  thirW == 'herbivoro'
) {
  console.log('vaca');
} else if (
  firsW == 'invertebrado' &&
  secoW == 'inseto' &&
  thirW == 'hematofago'
) {
  console.log('pulga');
} else if (
  firsW == 'invertebrado' &&
  secoW == 'inseto' &&
  thirW == 'herbivoro'
) {
  console.log('lagarta');
} else if (
  firsW == 'invertebrado' &&
  secoW == 'anelideo' &&
  thirW == 'hematofago'
) {
  console.log('sanguessuga');
} else if (
  firsW == 'invertebrado' &&
  secoW == 'anelideo' &&
  thirW == 'onivoro'
) {
  console.log('minhoca');
}

var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let values = parseFloat(lines.shift());

if (values >= 0 && values <= 25) {
  console.log('Intervalo [0,25]');
} else if (values > 25 && values <= 50) {
  console.log('Intervalo (25,50]');
} else if (values > 50 && values <= 75) {
  console.log('Intervalo (50,75]');
} else if (values > 75 && values <= 100) {
  console.log('Intervalo (75,100]');
} else {
  console.log('Fora de intervalo');
}

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let arrayCopy = lines.slice();

lines.sort(function (a, b) {
  return a - b;
});

for (i = 0; i < lines.length; i++) {
  console.log(`${parseInt(lines[i])}`);
}

console.log('');

for (i = 0; i < arrayCopy.length; i++) {
  console.log(`${parseInt(arrayCopy[i])}`);
}

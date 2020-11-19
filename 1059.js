var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

for (let i = 2; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(`${i}`);
  }
}

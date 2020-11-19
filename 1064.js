var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let totalPositivo = lines.reduce((acumulador, numero) => {
  if (numero > 0) {
    acumulador++;
  }
  return acumulador;
}, 0);
console.log(`${totalPositivo} valores positivos`);

let numbers = lines.map((num) => {
  return parseFloat(num);
});

let total = numbers
  .filter((num) => {
    return num > 0;
  })
  .reduce((acumulador, numero) => {
    return (acumulador += numero);
  });

let resultado = total / totalPositivo;
console.log(resultado.toFixed(1));

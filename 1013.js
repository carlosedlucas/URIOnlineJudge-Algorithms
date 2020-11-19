var input = require('fs').readFileSync('stdin', 'utf-8');
var valores = input.split(' ');

if (valores.length > 0) {
  let maior = parseInt(valores[0]);
  valores.forEach(function (elemento) {
    elemento = parseInt(elemento);
    if (elemento > maior) maior = elemento;
  });
  console.log(`${maior} eh o maior`);
}

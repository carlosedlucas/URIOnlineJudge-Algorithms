var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split('\n');
let line1 = lines.shift();
let stdin = parseInt(line1);
console.log(stdin);

let resto1 = quantasNotas(stdin, 100);
let resto2 = quantasNotas(resto1, 50);
let resto3 = quantasNotas(resto2, 20);
let resto4 = quantasNotas(resto3, 10);
let resto5 = quantasNotas(resto4, 5);
let resto6 = quantasNotas(resto5, 2);
quantasNotas(resto6, 1);

function quantasNotas(valorEntrada, valorNota) {
  let resultado = parseInt(valorEntrada / valorNota);
  if (resultado >= 1) {
    console.log(`${resultado} nota(s) de R$ ${valorNota},00`);
  } else {
    console.log(`0 nota(s) de R$ ${valorNota},00`);
  }
  return calculoResto(valorEntrada, valorNota);
}

function calculoResto(valorEntrada, valorNota) {
  return valorEntrada % valorNota;
}

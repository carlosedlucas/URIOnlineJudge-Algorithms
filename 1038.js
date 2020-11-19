var input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split(' ');

let codigoItem = lines.shift();
let quantidadeItem = lines.shift();

const tabela = [
  { code: 1, especification: 'Cachorro Quente', preco: 4 },
  { code: 2, especification: 'X-Salada', preco: 4.5 },
  { code: 3, especification: 'X-bacon', preco: 5 },
  { code: 4, especification: 'Torrada simples', preco: 2 },
  { code: 5, especification: 'Refrigerante', preco: 1.5 },
];

function valorAPagar(input1, input2) {
  let total = input2 * tabela[input1 - 1].preco;
  console.log(`Total: R$ ${total.toFixed(2)}`);
}

valorAPagar(codigoItem, quantidadeItem);

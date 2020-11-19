var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let renda = parseFloat(lines.shift());

if (renda > 0 && renda < 2000.01) {
  console.log('Isento');
} else if (renda < 3000.01) {
  let imposto = renda - 2000;
  let total = imposto * 0.8;
  console.log(`R$ ${total.toFixed(2)}`);
} else if (renda < 4500.01) {
  let imposto8PorCento = 1000 * 0.08;
  let imposto18PorCento = (renda - 3000) * 0.18;
  let total = imposto8PorCento + imposto18PorCento;
  console.log(`R$ ${total.toFixed(2)}`);
} else {
  let imposto8PorCento = 1000 * 0.08;
  let imposto18PorCento = 1500 * 0.18;
  let imposto28PorCento = (renda - 4500) * 0.28;
  let total = imposto8PorCento + imposto18PorCento + imposto28PorCento;
  console.log(`R$ ${total.toFixed(2)}`);
}

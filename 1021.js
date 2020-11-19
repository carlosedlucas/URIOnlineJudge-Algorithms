var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var shiftValue = lines.shift();
var value = shiftValue;

console.log('NOTAS:');
let remnaint = calcNotes(value, 100);
let remnaint1 = calcNotes(remnaint, 50);
let remnaint2 = calcNotes(remnaint1, 20);
let remnaint3 = calcNotes(remnaint2, 10);
let remnaint4 = calcNotes(remnaint3, 5);
let remnaint5 = calcNotes(remnaint4, 2);
console.log('MOEDAS:');
let remnaint6 = calcCoins(remnaint5, 1.0);
let remnaint7 = calcCoins(remnaint6, 0.5);
let remnaint8 = calcCoins(remnaint7, 0.25);
let remnaint9 = calcCoins(remnaint8, 0.1);
let remnaint10 = calcCoins(remnaint9, 0.05);
calcCoins(remnaint10, 0.01);

function calcNotes(input, divisor) {
  let result1 = parseFloat(input / divisor);
  if (result1 >= 1) {
    console.log(`${Math.floor(result1)} nota(s) de R$ ${divisor.toFixed(2)}`);
  } else {
    console.log(`0 nota(s) de R$ ${divisor.toFixed(2)}`);
  }
  return calcRemnaintNotes(input, divisor);
}

function calcCoins(input, divisor) {
  let result1 = parseFloat(input / divisor);
  if (result1 >= 1) {
    console.log(`${Math.floor(result1)} moeda(s) de R$ ${divisor.toFixed(2)}`);
  } else {
    console.log(`0 moeda(s) de R$ ${divisor.toFixed(2)}`);
  }
  return calcRemnaintCoins(input, divisor);
}

function calcRemnaintNotes(input, divisor) {
  let result = input % divisor;
  return result;
}

function calcRemnaintCoins(input, divisor) {
  let result = (input % divisor) + 0.00001;
  return result;
}

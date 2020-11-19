var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

var horaInicial = parseInt(lines.shift());
var minutoInicial = parseInt(lines.shift());
var horaFinal = parseInt(lines.shift());
var minutoFinal = parseInt(lines.shift());

function calcHour(hi, hf) {
  if (hf > hi) {
    total = hf - hi;
  } else if (hi > hf) {
    total = 24 - hi + hf;
  } else {
    total = 24;
  }
  return total;
}

function calcMinute(mi, mf) {
  if (mf > mi) {
    total = mf - mi;
  } else if (mi > mf) {
    total = 60 - mi + mf;
  } else {
    total = 0;
  }
  return total;
}

let hour = calcHour(horaInicial, horaFinal);
let minute = calcMinute(minutoInicial, minutoFinal);

if (horaInicial < 0 || horaFinal < 0 || minutoInicial < 0 || minutoFinal < 0) {
  console.log(`VALOR DIGITADO INVALIDO`);
} else if (hour == 24 && minute > 0) {
  console.log(`O JOGO DUROU 0 HORA(S) E ${minute} MINUTO(S)`);
} else {
  console.log(`O JOGO DUROU ${hour} HORA(S) E ${minute} MINUTO(S)`);
}

var input = require('fs').readFileSync('stdin','utf8');
var values = input.split(' ');

let horaInicio = parseInt(values.shift());
let horaFim = parseInt(values.shift());

if (horaInicio>12 && horaFim<12){
  tempoTotal = (24-horaInicio)+(horaFim);
  console.log(`O JOGO DUROU ${tempoTotal} HORA(S)`)
} else if (horaInicio<12 && horaFim>12){
  tempoTotal = horaFim-horaInicio;
  console.log(`O JOGO DUROU ${tempoTotal} HORA(S)`)
} else if (horaInicio==horaFim){
  console.log(`O JOGO DUROU 24 HORA(S)`)
}





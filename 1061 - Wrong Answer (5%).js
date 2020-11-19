var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

// Extração dos números dos tempos iniciais das strings
let diaInicialComString = lines.shift();
let diaInicial = parseInt(diaInicialComString.replace(/[^\d]+/g, ''));
let tempoInicial = lines.shift();
let horasIniciais = parseInt(tempoInicial.substring(0, 2));
let minutosIniciais = parseInt(tempoInicial.substring(5, 7));
let segundosIniciais = parseInt(tempoInicial.substring(10, 12));

// Extração dos números dos tempos finais das strings
let diaFinalComString = lines.shift();
let diaFinal = parseInt(diaFinalComString.replace(/[^\d]+/g, ''));
let tempoFinal = lines.shift();
let horasFinais = parseInt(tempoFinal.substring(0, 2));
let minutosFinais = parseInt(tempoFinal.substring(5, 7));
let segundosFinais = parseInt(tempoFinal.substring(10, 12));

if (diaFinal > diaInicial) {
  let W = diaFinal - diaInicial - 1;
  console.log(`${W} dia(s)`);
} else {
  console.log(`0 dia(s)`);
}

let zeroHora =
  horasFinais - horasIniciais == 1 && minutosIniciais > minutosFinais;
let X;
let Y;
let Z;

if (zeroHora) {
  X = 0;
  console.log(`0 hora(s)`);
} else {
  if (horasIniciais > horasFinais) {
    let horasIniciaisFormatoCorreto = 24 - horasIniciais;
    X = horasIniciaisFormatoCorreto + horasFinais;
    console.log(`${X} hora(s)`);
  } else if (horasFinais > horasIniciais) {
    X = horasFinais - horasIniciais;
    console.log(`${X} hora(s)`);
  } else {
    console.log(`0 hora(s)`);
  }
}

if (zeroHora) {
  let minutosIniciaisFormatoCorreto = 60 - minutosIniciais;
  Y = minutosIniciaisFormatoCorreto + minutosFinais - 1;
  console.log(`${Y} minuto(s)`);
} else {
  if (minutosIniciais > minutosFinais) {
    minutosIniciaisFormatoCorreto = 60 - minutosIniciais;
    Y = minutosIniciaisFormatoCorreto + minutosFinais;
    console.log(`${Y} minuto(s)`);
  } else if (minutosFinais > minutosIniciais) {
    Y = minutosFinais - minutosIniciais;
    console.log(`${Y} minuto(s)`);
  } else {
    console.log(`0 minuto(s)`);
  }
}

let somenteSegundos =
  diaFinal - diaInicial <= 0 &&
  horasIniciais === 0 &&
  horasFinais === 0 &&
  segundosIniciais > segundosFinais;

if (somenteSegundos) {
  console.log(`0 segundo(s)`);
} else {
  if (segundosIniciais > segundosFinais) {
    let segundosIniciaisFormatoCorreto = 60 - segundosIniciais;
    Z = segundosIniciaisFormatoCorreto + segundosFinais;
    console.log(`${Z} segundo(s)`);
  } else if (segundosFinais > segundosIniciais) {
    Z = segundosFinais - segundosIniciais;
    console.log(`${Z} segundo(s)`);
  } else {
    console.log(`0 segundo(s)`);
  }
}

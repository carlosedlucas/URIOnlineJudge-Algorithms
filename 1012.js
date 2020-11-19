var input = require('fs').readFileSync('stdin', 'utf-8');

var valores = input.split(' ');
var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

// Área do triângulo retângulo
var areaDoTrianguloRet = (A * C) / 2;

// Área do círculo
var areaDoCirculo = Math.PI.toFixed(5) * Math.pow(C, 2);

// Área do trapézio
var areaDoTrapezio = ((A + B) * C) / 2;

// Área do quadrado
var areaDoQuadrado = B * B;

// Área do retângulo
var areaDoRetangulo = A * B;

console.log('TRIANGULO = ' + areaDoTrianguloRet.toFixed(3));
console.log('CIRCULO = ' + areaDoCirculo.toFixed(3));
console.log('TRAPEZIO = ' + areaDoTrapezio.toFixed(3));
console.log('QUADRADO = ' + areaDoQuadrado.toFixed(3));
console.log('RETANGULO = ' + areaDoRetangulo.toFixed(3));

var input = require('fs').readFileSync('stdin', 'utf-8');

var R = parseFloat(input);

var volumeEsfera = (4 / 3) * Math.PI.toFixed(5) * Math.pow(R, 3);

console.log('VOLUME = ' + volumeEsfera.toFixed(3));

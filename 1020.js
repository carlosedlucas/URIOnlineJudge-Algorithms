var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var ageEntry = parseInt(lines.shift());

var years = parseInt(ageEntry / 365);
var months = parseInt((ageEntry % 365) / 30);
var days = parseInt((ageEntry % 365) - months * 30);

console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);

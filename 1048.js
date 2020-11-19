var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let salary = parseFloat(lines.shift());

if (salary <= 400) {
  let addition = salary * 0.15;
  let newSalary = salary + addition;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${addition.toFixed(2)}`);
  console.log(`Em percentual: 15 %`);
} else if (salary >= 400.01 && salary <= 800) {
  let addition = salary * 0.12;
  let newSalary = salary + addition;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${addition.toFixed(2)}`);
  console.log(`Em percentual: 12 %`);
} else if (salary >= 800.01 && salary <= 1200) {
  let addition = salary * 0.1;
  let newSalary = salary + addition;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${addition.toFixed(2)}`);
  console.log(`Em percentual: 10 %`);
} else if (salary >= 1200.01 && salary <= 2000) {
  let addition = salary * 0.07;
  let newSalary = salary + addition;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${addition.toFixed(2)}`);
  console.log(`Em percentual: 7 %`);
} else {
  let addition = salary * 0.04;
  let newSalary = salary + addition;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${addition.toFixed(2)}`);
  console.log(`Em percentual: 4 %`);
}

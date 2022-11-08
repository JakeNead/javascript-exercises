const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = arr => arr.reduce((a, b) => a + b, 0);

const multiply = arr => arr.reduce((a, b) => a * b, 1);

const power = (a, b) => a ** b;

const factorial = function(n) {
  let num = n
  if (n === 0 || n === 1) {
    return 1 
  } 
	for (let i = n; i > 1; i--){
    num = num * (i-1)
  }
  return num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

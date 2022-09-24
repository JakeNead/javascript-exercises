const add = function() {
	return arguments[0]+ arguments[1]
};

const subtract = function() {
	return arguments[0] - arguments[1]
};

// const sum = function() {
// 	return arguments[0].reduce((a, b) => {a + b}, 0)
// };

const sum = function(arr) {
  return arr.reduce((a, b) => {
    return a + b;
    }, 0)
}

const multiply = function(arr) {
  return arr.reduce((a, b) => {
    return a * b;
  })
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let num =n
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

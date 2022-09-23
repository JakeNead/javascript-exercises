const sumAll = function() {
    let sum = 0
    let num1
    let num2
    if (arguments[0] < arguments[1]){
      num1 = arguments[0]
      num2 = arguments[1]
    } else {
      num1 = arguments[1]
      num2 = arguments[0]
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 <0) {
        return 'ERROR'
    } 
      for (let i = num1; i <= num2; i++) {
        sum += i;
      }
      return sum
}

// Do not edit below this line
module.exports = sumAll;

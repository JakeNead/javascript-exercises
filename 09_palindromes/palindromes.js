const palindromes = function (arguments) {
    let str = arguments.toLowerCase().split('').filter(a => a.toUpperCase() !== a.toLowerCase())
    
return str
};

console.log(pandindromes('racecar'))
// Do not edit below this line
module.exports = palindromes;

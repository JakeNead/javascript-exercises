const palindromes = function (arg) {
    let str = arg.toLowerCase().split('').filter(a => a.toUpperCase() !== a.toLowerCase())
    let start = 0
    let end = str.length -1
    for (let i=0; i<str.length; i++) {
      if (start > end) {
        break
      } else if (str[start] !== str[end]) {
        return false
      }
      start++
      end--
      }
      return true
    }

// Do not edit below this line
module.exports = palindromes;

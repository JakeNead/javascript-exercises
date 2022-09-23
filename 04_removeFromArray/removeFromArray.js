const removeFromArray = function() {
    let arr = arguments[0] 
    for (let i = 1; i < arguments.length; i++) {
        arr = arr.filter(x => x !== arguments[i])
    }
        return arr
}

module.exports = removeFromArray;

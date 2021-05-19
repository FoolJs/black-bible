

/**
 * 
 * @param {Array} arr array
 * @param {Function} predicate 断言
 * @returns {Boolean}
 */
function arraySome (arr, predicate) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        if ( predicate(arr[i], i, arr) ) {
            return true;
        }
    }

    return false;
}


module.exports = arraySome;
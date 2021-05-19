

/**
 * 
 * @param {Array} array array
 * @param {Function} fn 断言函数
 * @param {Number} fromIndex 
 */
function arrayFindRight(array, fn, fromIndex) {
    fromIndex = fromIndex ? fromIndex : array.length - 1;

    for (; fromIndex >= 0; fromIndex--) {
        if ( fn(array[fromIndex], fromIndex, array) ) {
            return array[fromIndex];
        }
    }
}




module.exports = arrayFindRight;


/**
 * 
 * @private
 * @param {Array} arr array
 * @param {Function} predicate 断言
 * 
 */
function arrayEvery(arr, predicate) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {

        if ( !predicate(arr[i], i, arr) ) {
            return false;
        }
    }
    return true;
}


module.exports = arrayEvery;
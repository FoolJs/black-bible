

/**
 * 
 * @param {Array} arr array
 * @param {Function} fn func
 * @returns {Array}
 */
function arrayForEachRight (arr, fn) {
    let len = arr.length;

    for (let i = len - 1; i >= 0; i-- ) {
        if ( fn(arr[i], i, arr) === false ) {
            break;
        }
    }

    return arr;
}



module.exports = arrayForEachRight;
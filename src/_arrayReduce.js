
/**
 * @private
 * @param {Array} arr arr
 * @param {Function} fn func
 * @param {any} accumulator 初始值 
 * @returns {any}
 */
function arrayReduce(arr, fn, accumulator) {
    let len = arr.length,
        initValue = accumulator !== undefined ? accumulator : arr[0],
        i = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let result = fn( initValue, arr[i], i, arr );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}


module.exports = arrayReduce;
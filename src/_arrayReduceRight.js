


/**
 * @private
 * @param {Array} arr array
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function arrayReduceRight (arr, fn, accumulator) {
    let len = arr.length,
        initValue = accumulator !== undefined ? accumulator : arr[ len - 1 ],
        i = accumulator !== undefined ? len - 1 : len - 2;

    for (; i >= 0; i--) {
        let result = fn( initValue, arr[i], i, arr );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



module.exports = arrayReduceRight;
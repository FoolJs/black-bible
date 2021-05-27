
/**
 * @private
 * @param {String} str string
 * @param {Function} fn func
 * @param {any} accumulator 
 * @returns {any}
 */
function stringReduce(str, fn, accumulator) {
    let len = str.length,
        initValue = accumulator !== undefined ? accumulator : str[0],
        i = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let result = fn( initValue, str[i], i, str );

        if (result === false) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



module.exports = stringReduce;
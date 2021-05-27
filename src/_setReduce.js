

/**
 * @private
 * @param {Set} set set
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function setReduce (set, fn, accumulator) {
    let keys = Array.from( set.keys() ),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : keys[0],
        i  = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let value = keys[i],
            result = fn( initValue, value, value, set );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



module.exports = setReduce;
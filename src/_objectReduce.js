

/**
 * @private
 * @param {Object} obj obj
 * @param {Function} fn func
 * @param {any} accumulator 
 * @returns {any}
 */

function objectReduce (obj, fn, accumulator) {
    let keys = Object.keys(obj),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : obj[ keys[0] ],
        i = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let key = keys[i],
            result = fn(initValue, obj[key], key, obj);

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



module.exports = objectReduce;
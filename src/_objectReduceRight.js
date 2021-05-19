


/**
 * 
 * @param {{}} obj obj
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function objectReduceRight (obj, fn, accumulator) {
    let keys = Object.keys(obj),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : obj[ keys[len - 1] ],
        i = accumulator !== undefined ? len - 1 : len - 2;

    for (; i >= 0; i--) {
        let key = keys[i],
            value = obj[key],
            result = fn( initValue, value, key, obj );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}


module.exports = objectReduceRight;
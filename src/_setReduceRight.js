

/**
 * 
 * @param {Set} set set
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function setReduceRight (set, fn, accumulator) {
    let keys = Array.from( set.keys() ),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : keys[ len - 1 ],
        i = accumulator !== undefined ? len - 1 : len - 2;

    for (; i >= 0; i--) {
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


module.exports = setReduceRight;
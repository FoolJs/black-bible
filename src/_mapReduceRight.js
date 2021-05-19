

/**
 * 
 * @param {Map} map map
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function mapReduceRight (map, fn, accumulator) {
    let keys = Array.from( map.keys() ),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : map.get( keys[len - 1] ),
        i = accumulator !== undefined ? len - 1 : len - 2;

    for (; i >= 0; i--) {
        let key = keys[i],
            value = map.get(key),
            result = fn( initValue, value, key, map );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



module.exports = mapReduceRight;
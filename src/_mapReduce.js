

/**
 * @private
 * @param {Map} map map
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 * 
 * 
 */
function mapReduce(map, fn, accumulator) {

    let keys = Array.from( map.keys() ),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : map.get( keys[0] ),
        i = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let key = keys[i],
            result = fn( initValue, map.get(key), key, map );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



module.exports = mapReduce;
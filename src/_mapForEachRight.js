

/**
 * 
 * @param {Map} map map
 * @param {Function} fn func
 * @returns {Map}
 */
function mapForEachRight (map, fn) {
    let keys = Array.from( map.keys() ),
        len = keys.length;

    for (let i = len - 1; i >= 0 ; i--) {
        let key = keys[i],
            value = map.get(key);

        if ( fn(value, key, map) === false ) {
            break;
        }
    }

    return map;
}


module.exports = mapForEachRight;
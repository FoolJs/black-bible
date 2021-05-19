
/**
 * 
 * @param {Map} map map
 * @param {Function} fn 断言
 * @param {Number} fromIndex 索引
 * 
 */
function mapFindRight(map, fn, fromIndex) {
    let keys = Array.from( map.keys() );
    fromIndex = fromIndex ? fromIndex : keys.length;

    for (; fromIndex >= 0; fromIndex--) {
        let key = keys[fromIndex],
            value = map.get(key);

        if ( fn(value, key, map) ) {
            return key;
        }
    }
}


module.exports = mapFindRight;
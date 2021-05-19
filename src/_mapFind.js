

/**
 * 
 * @param {Map} map map
 * @param {Function} predicate 断言函数
 * @param {Number} fromIndex 
 */

function mapFind(map, predicate, fromIndex) {
    let keys = Array.from( map.keys() );

    for (; fromIndex < keys.length; fromIndex++) {
        let key = keys[fromIndex],
            value = map.get(key);

        if ( predicate(value, key, map) ) {
            return key;
        }
    }
}



module.exports = mapFind;
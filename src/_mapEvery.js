

/**
 * 
 * @param {Map} map map
 * @param {Function} predicate 断言
 * @returns 
 */
function mapEvery (map, predicate) {

    for (const iterate of map) {
        let key = iterate[0],
            value = iterate[1];

        if ( !predicate(value, key, map) ) {
            return false;
        }
    }

    return true;
}


module.exports = mapEvery;
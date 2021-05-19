


/**
 *  
 * @param {Map} map map
 * @param {Function} predicate 断言
 */
function mapSome(map, predicate) {

    for (const iterate of map) {
        let key = iterate[0],
            value = iterate[1];

        if ( predicate(value, key, map) ) {
            return true;
        }
    }

    return false;
}


module.exports = mapSome;
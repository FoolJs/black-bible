
/**
 * @private
 * @description map版map
 * @param {Map} map map
 * @param {Function} fn func
 * @returns {Array}
 */
function mapMap (map, fn) {
    let cache = [];

    for (const iterate of map) {
        cache.push( fn(iterate[1], iterate[0], map) );
    }

    return cache;
}


module.exports = mapMap;
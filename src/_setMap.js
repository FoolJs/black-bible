
/**
 * @private
 * @param {Set} set 
 * @param {Function} fn 
 * @returns {Array}
 */
function setMap (set, fn) {
    let cache = [];

    for (const iterate of set) {
        cache.push( fn(iterate, iterate, set) );
    }

    return cache;
}


module.exports = setMap;
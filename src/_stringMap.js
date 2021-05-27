
/**
 * @private
 * @param {String} str 
 * @param {Function} fn 
 * @returns {Array}
 */
function stringMap (str, fn) {
    let len = str.length,
        cache = [];

    for (let i = 0; i < len; i++) {
        cache.push( fn(str[i], i, str) );
    }

    return cache;
}



module.exports = stringMap;
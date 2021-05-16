
/**
 * @param {Number} num number
 * @param {Function} fn func
 * @returns {Array}
 */
function numberMap (num, fn) {
    let len = num,
        cache = [];

    for (let i = 0; i < len; i++) {
        cache.push( fn(i, i, num) );
    }

    return cache;
}



module.exports = numberMap;
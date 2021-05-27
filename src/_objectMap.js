

/**
 * @private
 * @param {Object} obj 
 * @param {Function} fn 
 * @returns {Array}
 */
function objectMap (obj, fn) {
    let cache = [];

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            cache.push( fn(element, key, obj) );
        }
    }

    return cache;
}


module.exports = objectMap;
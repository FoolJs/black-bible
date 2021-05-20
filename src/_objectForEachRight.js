


/**
 * 
 * @param {Object} obj obj
 * @param {Function} fn func
 * @returns {Object}
 */
function objectForEachRight (obj, fn) {
    let keys = Object.keys(obj),
        len = keys.length;

    for (let i = len - 1; i >= 0; i--) {
        let key = keys[i],
            value = obj[key];

        if ( fn(value, key, obj) === false ) {
            break;
        }
    }

    return obj;
}


module.exports = objectForEachRight;
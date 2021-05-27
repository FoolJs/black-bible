


/**
 * @private
 * @param {Set} set set
 * @param {Function} fn func
 * @returns {Set}
 */
function setForEachRight (set, fn) {
    let keys = Array.from( set.keys() ),
        len = keys.length;

    for (let i = len - 1; i >= 0; i--) {
        let value = keys[i];

        if ( fn(value, value, set) === false ) {
            break;
        }
    }

    return set;
}


module.exports = setForEachRight;
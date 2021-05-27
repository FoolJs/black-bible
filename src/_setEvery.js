

/**
 * @private
 * @param {Set} set set
 * @param {Function} predicate 断言
 * @returns {Boolean}
 */
function setEvery (set, predicate) {

    for (const iterate of set) {
        let value = iterate;

        if ( !predicate(value, value, set) ) {
            return false;
        }
    }

    return true;
}


module.exports = setEvery;
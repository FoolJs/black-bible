

/**
 * @private
 * @param {Set} set set
 * @param {Function} predicate 断言
 * @returns {Boolean}
 */
function setSome(set, predicate) {

    for (const iterate of set) {
        
        if ( predicate(iterate, iterate, set) ) {
            return true;
        }
    }

    return false;
}


module.exports = setSome;
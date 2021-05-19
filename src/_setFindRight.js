

/**
 * 
 * @param {Set} set set
 * @param {Function} fn 断言
 * @param {Number} fromIndex 索引
 * 
 */
function setFindRight(set, fn, fromIndex) {
    let keys = Array.from( set.keys() );
    fromIndex = fromIndex ? fromIndex : keys.length - 1;

    for (; fromIndex >= 0; fromIndex--) {
        let value = keys[fromIndex];

        if ( fn(value, value, set) ) {
            return value;
        }
    }
}


module.exports = setFindRight;
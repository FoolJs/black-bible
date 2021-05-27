

/**
 * @private
 * @param {Object} obj object
 * @param {Function} fn 断言函数
 * @param {Number} fromIndex 索引
 * 
 */
function objectFindRight(obj, fn, fromIndex) {
    let keys = Object.keys(obj);
    fromIndex = fromIndex ? fromIndex : keys.length - 1;

    for (; fromIndex >= 0; fromIndex--) {
        let key = keys[fromIndex],
            value = obj[key];

        if ( fn(value, key, obj) ) {
            return key;
        }
    }
}


module.exports = objectFindRight;
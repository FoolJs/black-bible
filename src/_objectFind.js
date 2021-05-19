


/**
 * 
 * @param {{}} obj object
 * @param {Function} predicate 断言函数
 * @param {Number} fromIndex 索引
 */

function objectFind(obj, predicate, fromIndex) {
    let keys = Object.keys(obj);

    for (; fromIndex < keys.length; fromIndex++) {
        let key = keys[fromIndex],
            value = obj[key];

        if ( predicate(value, key, obj) ) {
            return key;
        }
    }
}




module.exports = objectFind;
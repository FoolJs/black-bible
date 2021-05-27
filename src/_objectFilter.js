
/**
 * @private
 * @description 对象版filter
 * @param {Object} obj obj
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的对象的项组成的数组
 */
function objectFilter (obj, cb) {
    let cache = [];

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            
            if ( cb(element, key, obj) ) {
                cache.push(key);
            }
        }
    }

    return cache;
}


module.exports = objectFilter;

/**
 * @private
 * @description set版filter
 * @param {Set} arr Set
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的元素组成的数组
 */
function setFilter(set, cb) {
    let cache = [];

    for (const value of set) {
        if (cb(value, value, set)) {
            cache.push(value);
        }
    }

    return cache;
}

module.exports = setFilter;

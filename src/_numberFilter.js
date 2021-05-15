
/**
 * @description 数字版filter
 * @param {Number} num number
 * @param {Function} cb 调用tnum次cb
 * @returns 函数返回true的项组成的数组
 */
function numberFilter (num, cb) {
    let len = num,
        cache = [];

    for (let i = 0; i < len; i++) {
        if ( cb(i, i, num) ) {
            cache.push(i);
        }
    }

    return cache;
}

module.exports = numberFilter;
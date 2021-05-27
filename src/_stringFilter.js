
/**
 * @private
 * @description 字符串版filter
 * @param {String} str String
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的字符组成的数组
 */
function stringFilter (str, cb) {
    let cache = [],
        len = str.length;

    for (let i = 0; i < len; i++) {
        if ( cb(str[i], i, str) ) {
            cache.push( str[i] );
        }
    }

    return cache;
}


module.exports = stringFilter;
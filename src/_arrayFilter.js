
/**
 * 
 * @private
 * 
 * @description 数组版filter
 * @param {Array} arr array
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的项组成的数组
 */
function arrayFilter (arr, cb) {
    const len = arr.length,
            cache = [];

    for (let i = 0; i < len; i++) {
        if ( cb(arr[i], i, arr) ) {
            cache.push( arr[i] );
        }
    }

    return cache;
}


module.exports = arrayFilter;
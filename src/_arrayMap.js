
/**
 * @description 数组版map迭代方法
 * @param {Array} arr 数组
 * @param {Function} fn func
 * @returns {Array}
 */
function arrayMap (arr, fn) {
    let len = arr.length,
        cache = [];

    for (let i = 0; i < len; i++) {
        cache.push( fn(arr[i], i, arr) );
    }

    return cache;
}


module.exports = arrayMap;
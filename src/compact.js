

/**
 * 
 * @module compact
 * 
 * @description 获取真值数组
 * 
 * 返回一个新数组，包含原数组只呢个的所有真值，
 * 假值为：undefined, NaN, 0, false, null
 * 
 * 
 * 
 * @param {Array} arr array
 * @returns {Array} 数组中的真值元素组成的数组
 * 
 * 
 * @example
 * 
 * let arr = [0, 1, false, 2, null, '', 3, NaN, 4, undefined, 5];
 * 
 * // [1, 2, 3, 4, 5];
 * console.log( _.compact(arr) );
 * 
 */

function compact (arr) {
    let cache = [];

    for (const iterate of arr) {
        if (iterate) {
            cache.push(iterate);
        }
    }

    return cache;
}



module.exports = compact;
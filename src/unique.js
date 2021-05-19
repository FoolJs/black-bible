

/**
 * @module unique
 * 
 * @description 去重函数
 * 
 * 数组去重，不改变原数组，返回去重后的新数组
 * 
 * @param {Array} arr array
 * @returns {Array} 去重后的数组
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4, 1, 2, 3, 5];
 * 
 * _.unique(arr);  // [1, 2, 3, 4, 5]
 * 
 */
function unique (arr) {
    let cache = [];

    for (const iterate of arr) {
        if ( cache.includes(iterate) ) {
            continue;
        }
        cache.push(iterate);
    }

    return cache;
}


module.exports = unique;
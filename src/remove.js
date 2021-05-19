const pull = require('./pull'),
        unique = require('./unique');



/**
 * 
 * @module remove
 * 
 * @description 删除数组元素
 * 
 * 删除数组中所有对函数返回True的项，返回删除的项，在原数组删除
 * 断言函数接受三个参数，数组当前项的值，索引和数组本身
 * 
 * @param {Array} arr array
 * @param {Function} fn 断言函数，
 * @returns {Array} 函数返回true的项组成的数组
 * 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * 
 * _.remove(arr);    //  [ 2, 4, 6, 8, 10 ]
 * 
 * console.log(arr);  //  [ 1, 3, 5, 7, 9 ]
 * 
 */
function remove (arr, fn) {
    let cache = [];

    for (let i = 0; i < arr.length; i++) {
        if ( fn(arr[i], i, arr) ) {
            cache.push( arr[i] );
        }
    }

    pull( arr, ...unique(cache) );

    return cache;
}



module.exports = remove;
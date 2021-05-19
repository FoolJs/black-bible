const forEach = require('./forEach'),
        pullOne = require('./_pullOne');


/**
 * 
 * @module pull
 * 
 * @description 移除数组元素
 * 
 * 删除数组中所有与给定值相等的元素，给定值可以有多个，该方法会在原数组修改，
 * 返回修改完成后的数组
 * 
 * @param {Array} arr array
 * @param  {...any} args 想要删除的元素
 * @returns {Array} 修改完成的数组 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4, 3, 2, 6, 1, 2];
 * 
 * _.pull(arr, 1, 2);  //  [3, 4, 3, 6]
 * 
 * 
 */
function pull (arr, ...args) {
    forEach(args, argsItem => {
        pullOne(arr, argsItem);
    });
    return arr;
}





module.exports = pull;
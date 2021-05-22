const filter = require('./filter');



/**
 * 
 * @module withOut
 * 
 * @description 移除所有等于calue的值
 * 
 * 返回一个新数组，其中包含所有不等于value的值
 * 
 * @param {Array} arr array
 * @param  {...any} values 想要移除的值
 * @returns {Array}
 * 
 * @example
 * 
 * 
 * let arr = [1, 1, 0, 2, 3 ,4 ,5 ,3, 6];
 * 
 * // [0, 2, 4, 5, 6]
 * console.log( _.withOut(arr, 1, 3) );
 * 
 */
function withOut (arr, ...values) {
    return filter(arr, item => !values.includes(item));
}


module.exports = withOut;
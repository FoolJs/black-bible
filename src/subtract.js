const reduce = require('./reduce');


/**
 * 
 * @module subtract
 * 
 * @description 集合内所有元素的差
 * 
 * @param {Array | Object | Map | Set} collection 集合
 * @returns {Number}
 * 
 * 
 * @example
 * 
 * // 0
 * console.log（_.subtract([3, 2, 1]))
 * 
 * 
 */
function subtract(collection) {
    return reduce(collection, (pre, cur) => pre - cur);
}








module.exports = subtract;
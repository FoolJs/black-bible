const reduce = require("./reduce");


/**
 * 
 * @module sum
 * 
 * @description 集合内所有值的和
 * 
 * @param {Array | Object | Map | Set } collection 集合 
 * @returns {Number}
 * 
 * 
 * @example
 * 
 * // 6
 * console.log(_.sum([1, 2, 3]))
 * 
 */
function sum (collection) {
    return reduce(collection, (pre, cur) => pre + cur);
}



module.exports = sum;
const reduce = require("./reduce");


/**
 * 
 * @module multiply
 * 
 * @description 求集合的乘积
 * 
 * 
 * 
 * 
 * @param {Array | Object | Map | Set} collection 集合
 * @returns {Number}
 * 
 * @example
 * 
 * // 24
 * console.log(_.multiply([2, 3, 4]))
 * 
 */
function multiply (collection) {
    return reduce(collection, (pre, cur) => pre * cur);
}


module.exports = multiply;
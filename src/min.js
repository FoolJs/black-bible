const reduce = require("./reduce");


/**
 * 
 * @module min
 * 
 * @description 求最小值    
 * 
 * @param {Array | Map | Set | Object} collection 集合
 * @returns {Number | String}
 * 
 * @example
 * 
 * 
 * // 0
 * console.log(_.min([1, 2, 3, 0]))
 * 
 */
function min (collection) {
    return reduce(collection, (pre, cur) => pre < cur ? pre : cur);
}



module.exports = min;
const reduce = require("./reduce");


/**
 * 
 * @module divide
 * 
 * @description 求商
 * 
 * 
 * 
 * @param {Array | Object | Map | Set} collection 集合
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // 2
 * console.log(_.divide([4, 2]));
 * 
 */
function divide (collection) {
    return reduce(collection, (pre, cur) => pre / cur);
}



module.exports = divide;;
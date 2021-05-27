const reduce = require("./reduce");


/**
 * 
 * @module max
 * 
 * @description 集合的最大值
 * 
 * 
 * @param {Array | Object | Map | Set} collection 集合
 * @returns {Number | String}
 * 
 * 
 * @example
 * 
 * // 3
 * console.log(_.max([1, 2, 3]))
 * 
 * // c
 * console.log(_.max({'a', 'b', 'c'}))
 * 
 */
function max (collection) {
    return reduce(collection, (pre, cur) => {
        return pre > cur ?
                pre :
                cur;
    });
}


module.exports = max;
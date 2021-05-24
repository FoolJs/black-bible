const checkedType = require('./checkedType'),
        isNodeEnv = require('./isNodeEnv'),
        isObjectLike = require('./isObjectLike'),
        nodeUtil= require('./_nodeUtil');

/**
 * 
 * @module isMap
 * 
 * @description 检查值是否为Map
 * 
 * @param {*} value 需要检查的值
 * @returns {Boolean}
 * 
 * @example
 * 
 * // true
 * console.log(_.isMap(new Map()))
 * 
 */
function isMap (value) {
    return isNodeEnv() ?
            nodeUtil.isMap(value) :
            isObjectLike(value) && checkedType(value) === 'Map';
}




module.exports = isMap;
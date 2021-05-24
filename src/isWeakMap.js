const checkedType = require('./checkedType'),
    isNodeEnv = require('./isNodeEnv'),
    isObjectLike = require('./isObjectLike'),
    nodeUtil = require('./_nodeUtil');



/**
 * 
 * @module isWeakMap
 * 
 * @description 检查值是否是WeakMap
 * 
 * 
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * console.log(_.isWeakMap(new WeakMap()))
 * 
 */
function isWeakMap (value) {
    return isNodeEnv() ?
            nodeUtil.isWeakMap(value) :
            isObjectLike(value) && checkedType(value) === 'WeakMap';
}


module.exports = isWeakMap;
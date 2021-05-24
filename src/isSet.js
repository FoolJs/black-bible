const checkedType = require('./checkedType'),
    isNodeEnv = require('./isNodeEnv'),
    isObjectLike = require('./isObjectLike'),
    nodeUtil = require('./_nodeUtil');


/**
 * 
 * @module isSet
 * 
 * @description 是否是Set
 * 
 * @param {*} value 需要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * console.log(_.isSet(new Set()))
 * 
 */
function isSet(value) {
    return isNodeEnv() ?
            nodeUtil.isSet(value) :
            isObjectLike(value) && checkedType(value) === 'Set';
}

module.exports = isSet;

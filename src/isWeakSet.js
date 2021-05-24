const checkedType = require('./checkedType'),
    isNodeEnv = require('./isNodeEnv'),
    isObjectLike = require('./isObjectLike'),
    nodeUtil = require('./_nodeUtil');

/**
 *
 * @module isWeakSet
 *
 * @description 检查值是否是WeakSet
 *
 *
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 *
 *
 * @example
 *
 * // true
 * console.log(_.isWeakSet(new WeakSet()))
 *
 */
function isWeakSet(value) {
    return isNodeEnv()
        ? nodeUtil.isWeakSet(value)
        : isObjectLike(value) && checkedType(value) === 'WeakSet';
}

module.exports = isWeakSet;

const checkedType = require('./checkedType');

/**
 * 
 * @module isBoolean
 * 
 * @description 检查是否是布尔值
 * 
 * 
 * 
 * @param {*} value 需要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * _.isBoolean(true)
 * 
 * 
 * // true
 * _.isBoolean(false)
 * 
 */
function isBoolean (value) {
    return (typeof value === 'boolean') || (checkedType(value) === 'Boolean');
}


module.exports = isBoolean;
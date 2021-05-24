const isNumber = require('./isNumber');
const nativeIsFinite = require('./_nativeIsFinite');



/**
 * 
 * 
 * @module isFinite
 * 
 * @description 值是否是有限数字
 * 
 * @param {*} value 需要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * console.log( _.isFinite(100) );
 * 
 * // false
 * console.log( _.isFinite(1e10000) );
 * 
 */

const _isFinite = function (value) {
    return isNumber(value) && nativeIsFinite(value);
}


module.exports = _isFinite;


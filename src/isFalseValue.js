
const isUndefined = require('./isUndefined'),
        isNull = require('./isNull');

/**
 * 
 * @module isFalseValue
 * 
 * @description 检查是否是假植
 * 
 * 在这里，假值的概念为值等于 undefined ，null ，false ，0
 * 
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * 
 * // false
 * console.log( _.isFalseValue(0) );
 * console.log( _.isFalseValue(false) );
 * console.log( _.isFalseValue(null) );
 * console.log( _.isFalseValue(undefined) );
 * 
 * 
 */
function isFalseValue (value) {
    return isUndefined(value) ||
            isNull(value) ||
            value === 0 ||
            value === false;
}





module.exports = isFalseValue;
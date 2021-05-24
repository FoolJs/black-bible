const isUndefined = require('./isUndefined'),
    isNull = require('./isNull');

/**
 *
 * @module isTrueValue
 *
 * @description 值是否是真值
 *
 * 在这里，真值的概念为不等于 undefined ，null ，0 ，false，
 *
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 *
 * @example
 *
 * // false
 * console.log(_.isTrueValue(undefined));
 *
 * // false
 * console.log(_.isTrueValue(0));
 *
 * // false
 * console.log(_.isTrueValue(null));
 *
 * // false
 * console.log(_.isTrueValue(false));
 *
 * // true
 * console.log(_.isTrueValue('0'));
 *
 */
function isTrueValue(value) {
    return (
        !isUndefined(value) && !isNull(value) && value !== 0 && value !== false
    );
}


module.exports = isTrueValue;

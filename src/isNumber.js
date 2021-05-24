

const checkedType = require('./checkedType'),
    isObjectLike = require('./isObjectLike');



/**
 * 
 * @module isNumber
 * 
 * @description 检查是否是数字
 * 
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * _.isNumber(new Number(100));
 * 
 * // true
 * _.isNumber(100);
 * 
 */
function isNumber (value) {
    return typeof value === 'number' || 
        ( isObjectLike(value) && checkedType(value) === 'Number' );
}


module.exports = isNumber;
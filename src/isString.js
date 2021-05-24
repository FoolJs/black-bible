const checkedType = require('./checkedType'),
    isObjectLike = require('./isObjectLike');



/**
 * 
 * @module isString
 * 
 * @description 检查是否是字符串
 * 
 * 
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * _.isString('aaa')
 * 
 * // true
 * _.isString(new String())
 * 
 */
function isString(value) {
    return (
        typeof value === 'string' ||
        (isObjectLike(value) && checkedType(value) === 'String')
    );
}



module.exports = isString;
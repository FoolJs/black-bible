const checkedType = require('./checkedType'),
        isObjectLike = require('./isObjectLike');


/**
 * @module isArray
 * 
 * @description 是否是数组类型
 * 
 * 使用Array的isArray方法来进行检查
 * 
 * @param {any} value 要检查的值
 * 
 * @example
 * 
 * 
 * // true
 * _.isArray([]);
 * 
 * 
 * 
 */
function isArray (value) {
    return Array.isArray(value) ||
            (isObjectLike(value) && checkedType(value) === 'Array');
}



module.exports = isArray;
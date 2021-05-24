const checkedType = require('./checkedType'),
        isObject = require('./isObject');

/**
 * 
 * @module isFunction
 * 
 * @description 值是否是函数
 * 
 * 
 * 
 * 
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 * 
 * @example
 * 
 * // true
 * console.log(_.isFunction(function f(){}))
 * 
 * 
 */
function isFunction (value) {
    return (typeof value === 'function') ||
            (isObject(value) && checkedType(value) === 'Function');
}



module.exports = isFunction;
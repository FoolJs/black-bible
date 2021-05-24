


/**
 * 
 * @module isObject
 * 
 * @description 检查是否是对象类型
 * 
 * 对于任何对象类型包括函数返回True，对于null返回false和undefined返回false
 * 
 * @param {any} value 想要检查的值
 * @returns {Boolean} 
 * 
 * @example
 * 
 * // true
 * _.isObject([])
 * 
 * // false
 * _.isObject(null)
 * 
 * // false
 * _.isObject(undefined)
 * 
 */
function isObject (value) {
    const type = typeof value;

    return value !== null && (type === 'function' || type === 'object');
}


module.exports = isObject;


/**
 * 
 * @module isObjectLike
 * 
 * @description 检查是否是类对象
 * 
 * 跟isObject基本相同，只是会对函数返回false，也就是说对
 * 一个非null非function对象返回True
 * 
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 * 
 * @example
 * 
 * // false
 * _.isObjectLike(function f () {})
 * 
 */
function isObjectLike (value) {
    const type = typeof value;
    return value !== null && type === 'object';
}



module.exports = isObjectLike;
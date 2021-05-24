

/**
 * 
 * @module isNaN
 * 
 * @description 检查是否是NaN
 * 
 * 与Javascript自带的isNaN不同，该函数只会对NaN值返回true
 * 
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * _.isNaN(NaN);
 * 
 * // false
 * _.isNaN('AAA');
 * 
 */
function isNaN (value) {
    return value !== value;
}


module.exports = isNaN;



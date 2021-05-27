const reduce = require('./reduce');


/**
 * 
 * @module add
 * 
 * @description 求所有参数的和
 * 
 * 对于参数列表中的任何类型，都会尝试相加，所以可能会有强制类型转换
 * 
 * @param  {...any} args 参数   
 * @returns {Number}
 * 
 * @example
 * 
 * // 'abc'
 * console.log(_.add('a', 'b', 'c'))
 * 
 * // 6
 * console.log(_.add(1, 2, 3))
 * 
 */
function add(...args) {
    return reduce(args, (pre, cur) => pre + cur);
}



module.exports = add;
const _globalThis = require('./_globalThis');

/**
 * 
 * @module delay
 * 
 * @description 延时函数
 * 
 * 延时函数fn的执行wait毫秒，会返回一个定时器ID
 * 
 * @param {Function} fn 想要延时的函数
 * @param {Number} wait 延时
 * @param {Array} args 函数fn需要的参数，需要放到一个数组里面
 * @param {any} [point=globalThis] 函数fn执行时环境，默认为globalThis
 * @returns {Object} 定时器ID
 * 
 * 
 * @example
 * 
 * let obj = {
 *      name: 'Sun XiaoChuan',
 *      age: 6,
 *      introduction() {
 *      console.log(`My name is ${this.name} I'm ${this.age} years old`)
 *      }
 * }
 * 
 * // My name is sun Xiaochuan. I'm 6 years old
 * let timerId = delay(obj.introduction, 1000, [], obj);
 * 
 */
function delay (fn, wait, args, point=_globalThis()) {
    return setTimeout(() => {
        fn.apply(point, args);
    }, wait);
}


module.exports = delay;
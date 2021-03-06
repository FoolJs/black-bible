/**
 *
 * @module curry
 * 
 * @description 函数柯里化的辅助函数
 * 
 * 接受一个函数fn和可选的用于函数fn的参数，返回柯里化后的函数fn，即使函数fn的参数已经满足
 * 同样会返回一个函数而不是fn调用的结果
 * 
 * @param {Function} fn 想要柯里化的函数
 * @param  {...any} args 函数fn所需要的参数
 * @returns {Function} 柯里化后的函数
 *
 * @example
 *  function add (a, b, c, d) {
 *      console.log(a + b + c + d);
 *  }
 *
 * let curried = _.curry(add, 1, 1, 1, 1);
 *
 * curried();  // 4
 *
 * let curried2 = _.curry(add);
 *
 * curried2(1)(1)(1)(1);  // 4
 *
 * curried2(1, 1)(1)(1);  // 4
 *
 * curried2(1, 1, 1)(1);  // 4
 *
 *
 */
function curry(fn, ...args) {
    return function curried(...args2) {
        if (args.length + args2.length >= fn.length) {
            return fn.apply(this, args.concat(args2));
        }

        return function (...args3) {
            return curried.apply(this, args2.concat(args3));
        };
    };
}

module.exports = curry;

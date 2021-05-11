
/**
 * @description 函数柯里化的辅助函数
 * @param {Function} fn 需要柯里化的函数
 * @returns 柯里化后的函数
 */
function curry (fn) {
    return function curried (...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply( this, args.concat(args2) );
            }
        }
    }
}



module.exports = curry;
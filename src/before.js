const _globalThis = require('./_globalThis');



/**
 * 
 * @module before
 * 
 * @description 限制函数执行的次数
 * 
 * 限制函数只能执行多少次，返回一个执行器函数，用来执行函数，次数到之后，再次执行函数
 * 会失效，
 * 
 * 
 * @param {Function} fn 想要限制执行次数的函数
 * @param {Number} count 执行次数
 * @param {any}  [point=globalThis] 函数运行时所在环境，默认为globalThis
 * @returns {Function}  执行器函数
 * 
 * 
 * @example
 * 
 * function before (n) {
    console.log('只有在前四次点击才会执行我');
 *}
 *
 * 
 * let button = document.querySelector('button');
 * 
 * let exec = _.before(before, 4);
 * 
 * button.addEventListener('click', exec);
 * 
 */
function before (fn, count, point=_globalThis()) {
    function* generateSequence() {
        for (let i = 0; i < count; i++) {
            yield fn.call(point);
        }
    }

    let generator = generateSequence();

    return () => {
        generator.next();
    };
}


module.exports = before;
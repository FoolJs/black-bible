const before = require('./_execBefore'),
        after = require('./_execAfter');





/**
 * 
 * @module limitExec
 * 
 * @description 限制函数的执行次数
 * 
 * 可选的第三个参数isBefore默认为True，决定函数fn能够执行的次数，
 * 若是isBefore为false，则行为改变为在执行执行器函数执行num次后的执行，才会真正执行函数fn
 * 
 * @param {Function} fn 想要限制执行的函数
 * @param {Number} num 次数
 * @param {Boolean} isBefore 限制执行num次函数fn还是在执行num次后执行函数fn
 * @returns {Function} 执行器函数
 * 
 * 
 * @example
 * 
 * 
 * function before (n) {
    console.log('只有在前四次点击才会执行我');
 *}
 *
 * 
 * let button = document.querySelector('button');
 * 
 * let exec = limitExec(before, 4);
 * 
 * button.addEventListener('click', exec);
 * 
 * 
 * 
 */
function limitExec (fn, num, isBefore=true) {
    let func = null;

    if (isBefore) {
        func = before;
    } else {
        func = after;
    }

    return func( fn, num );
}



module.exports = limitExec;
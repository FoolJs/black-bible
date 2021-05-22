


/**
 * 
 * @module after
 * 
 * @description 函数在count次后执行
 * 
 * 限制函数在触发多少次后执行
 * 
 * @param {Function} fn 想要限制执行的函数
 * @param {Number} count 次数
 * @param {any} [point=globalThis] 函数执行时环境，默认为globalThis
 * @returns {Function} 执行器函数
 * 
 * @example
 * 
 * function after (n) {
    console.log('只有在点击四次后才会执行我');
 *}
 *
 * 
 * let button = document.querySelector('button');
 * 
 * let exec = _.after(after, 4);
 * 
 * button.addEventListener('click', exec);
 * 
 */
function after (fn, count, point=globalThis) {
    function* generateSequence() {
        for (let i = 0; i < count; i++) {
            yield;
        }
    }

    let generator = generateSequence();

    return () => {
        if (generator.next().done) {
            fn.call(point);
        }
    };
}


module.exports = after;
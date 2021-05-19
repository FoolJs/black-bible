

/**
 * 
 * 限定执行器函数只要有在执行num次后执行，才会调用函数fn
 * 
 * @param {Function} fn func
 * @param {Number} num 次数
 * @returns {Function} 执行器函数
 */
function execAfter(fn, num) {
    function* generateSequence() {
        for (let i = 0; i < num; i++) {
            yield;
        }
    }

    let generator = generateSequence();

    return () => {
        if (generator.next().done) {
            fn();
        }
    };
}


module.exports = execAfter;
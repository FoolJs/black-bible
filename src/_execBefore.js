

/**
 * 
 * 限定执行器函数只能在num次调用才会执行函数fn
 * 
 * @param {Function} fn func
 * @param {Number} num 次数
 * @returns {Function} 执行器函数
 */
function execBefore(fn, num) {
    function* generateSequence() {
        for (let i = 0; i < num; i++) {
            yield fn();
        }
    }

    let generator = generateSequence();

    return () => {
        generator.next();
    };
}


module.exports = execBefore;
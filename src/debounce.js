const NO_FUNCTION_ERROR = 'cb is not a function';


/**
 * 
 * @module debounce
 * 
 * 
 * @description 创建一个防抖函数
 * 
 * 
 * 创建一个防抖函数，根据option选项对象来决定delay延时开始前或结束
 * 后调用回调函数，其中option.before决定是否在延时开始之前触发回调，若是为false，那么
 * 无论option.after为true还是false，都会在延时结束后触发回调，option.after决定是否
 * 在延时结束之后触发回调，函数返回的防抖函数拥有一个cancel方法，用来取消延时调用
 * 
 * @param {Function} cb 回调函数
 * @param {0} delay 延时
 * @param {{before: false, after: true}} option 选项对象
 * @param {Boolean} [option.before] 是否在延时开始之前触发回调
 * @param {Boolean} [option.after] 是否在延时结束之后触发回调
 * @returns {Function} debounced 防抖函数
 * 
 * @example
 * 
 * function go () {
        console.log('scroll');
 * }
 *
 * window.addEventListener( 'scroll', _.debounce(go, 1000) );
 * 
 * window.addEventListener( 'scroll', _.debounce(go, 1000, {before: true, after: true}) );
 * 
 * 
 */
function debounce(cb, delay=0, option = { before: false, after: true }) {
    let timerId = null;

    if (typeof cb !== 'function') {
        throw new Error(NO_FUNCTION_ERROR);
    }

    const cancel = () => {
        clearTimeout(timerId);
        timerId = null;
    };

    const debounced = (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }

        if (option.before) {
            if (!timerId) {
                cb(...args);
            }
            timerId = setTimeout(() => {
                cancel();
                if (option.after) {
                    cb(...args);
                }
            }, delay);
        } else {
            timerId = setTimeout(() => {
                cb(...args);
                cancel();
            }, delay);
        }

    };

    debounced.cancel = cancel;

    return debounced;
}

module.exports = debounce;



/**
 * @description 节流函数
 * @param {Function} fn 事件处理函数
 * @param {Numer} time 延时
 */
function throttle (fn, time) {
    let state = true,
        timerId = null;

    let throttled = function () {
        let _this = this,
            args = arguments;

        if (!state) {
            return false;
        }
        state = false;

        timerId = setTimeout(() => {
            fn.apply(_this, args);
            state = true;
        }, time);
    };

    return throttled;
}


module.exports = throttle;


/**
 * @description 防抖函数
 * @param {Function} fn 回调函数
 * @param {Number} time 延时
 * @param {Boolean} triggleNow 第一次触发是否立即执行
 * @returns 
 */
function debounce(fn, time, triggleNow) {
    let timerId = null;

    let debounced = function () {
        let _this = this,
            args = arguments;

        if (timerId) {
            clearTimeout(timerId);
        }

        if (triggleNow) {
            let exec = !timerId;

            timerId = setTimeout(() => {
                timerId = null;
            }, time);

            if (exec) {
                fn.apply(_this, args);
            }

        } else {
            timerId = setTimeout(() => {
                fn.apply(_this, args);
            }, time);
        }
    };

    debounced.remove = function () {
        clearTimeout(timerId);
        timerId = null;
    };

    return debounced;
}


module.exports = debounce;
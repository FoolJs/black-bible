
/**
 * 
 * @private
 * @description 数组版本的forEach，可以通过返回false停止执行
 * @param {Array} target 数组
 * @param {Function} cb 对数组每个元素调用的函数
 * @returns {Array} 数组本身
 */
function arrayForEach (target, cb) {
    const len = target.length;

    for (let i = 0; i < len; i++) {
        if ( cb(target[i], i, target) === false ) {
            break;
        }
    }

    return target;
}


module.exports = arrayForEach;

/**
 * @description Set版forEach
 * @param {Set} target set
 * @param {Function} cb 对set每个元素调用的函数
 * @returns set本身
 */
function setForEach (target, cb) {
    for (const iter of target) {
        if ( cb(iter, iter, target) === false ) {
            break;
        }
    }
    return target;
}


module.exports = setForEach;
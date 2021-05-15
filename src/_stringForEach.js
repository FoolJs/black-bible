
/**
 * @description String类型的Foreach
 * @param {String} target string
 * @param {Function} cb 对每个字符调用的函数
 * @returns string
 */
function stringForEach (target, cb) {
    const len = target.length;

    for (let i = 0; i < len; i++) {
        if ( cb(target[i], i, target) === false ) {
            break;
        }
    }

    return target;
}



module.exports = stringForEach;
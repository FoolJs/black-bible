
/**
 * @private
 * @description map版forEach
 * @param {Map} target map
 * @param {Function} cb 对map的每个元素调用的函数
 * @returns map本身
 */
function mapForEach (target, cb) {
    for (const iter of target) {
        let key = iter[0],
            value = iter[1];

        if ( cb(value, key, target) === false ) {
            break;
        }
    }
    return target;
}



module.exports = mapForEach;

/**
 * @description Number版Foreach
 * @param {Number} target number
 * @param {Function} cb 调用target次cb
 * @returns target
 */
function numberForEach (target, cb) {
    let len = target;

    for (let i = 0; i < len; i++) {
        if ( cb(i, target) === false ) {
            break;
        }
    }

    return target;
}



module.exports = numberForEach;
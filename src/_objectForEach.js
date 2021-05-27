/**
 * 
 * @private
 * @description 对象版本的forEach
 * @param {Object} target  对象
 * @param {Function} cb 对对象每个属性调用的回调函数
 * @returns {Object} 对象本身
 */
function objectForEach(target, cb) {
    for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
            const element = target[key];
            
            if ( cb(element, key, target) === false ) {
                break;
            }
        }
    }
    return target;
}




module.exports = objectForEach;
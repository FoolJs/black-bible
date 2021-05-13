/**
 * @description 对象版本的forEach
 * @param {Object} target  对象
 * @param {Function} cb 对对象每个属性调用的回调函数
 * @param {Boolean} iteratProps 是否迭代对象的原型
 * @returns {Object} 对象本身
 */
function objectForEach(target, cb, iteratProps) {
    if (iteratProps) {
        if (iterate(target, cb)) {
            let prop = Object.getPrototypeOf(target);
            if (prop !== Object.prototype) {
                objectForEach(prop, cb, iteratProps);
            }
        }
    } else {
        iterate(target, cb);
    }
    return target;
}

/**
 * @description 迭代函数
 * @param {Object} target  对象
 * @param {Function} cb 对对象每个属性调用的回调函数
 */
function iterate(target, cb) {
    for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
            const element = target[key];
            if (cb(element, key, target) === false) {
                return false;
            }
        }
    }
    return true;
}


module.exports = objectForEach;
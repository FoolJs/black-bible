const checkedType = require('./checkedType.js');


/**
 * @description 深拷贝函数
 * @param {*} target 想要深拷贝的对象
 * @param {WeakMap} weakMap 用来保存出现过的对象的WeakMap
 * @returns 深拷贝后的对象
 */
function deepClone(target, weakMap = new WeakMap()) {
    let result = null,
        targetType = checkedType(target);

    if (typeof target !== 'object') {
        return target;
    }
    if (target === 'null') {
        return target;
    }
    if (targetType === 'Date') {
        return new Date(target);
    }
    if (targetType === 'RegExp') {
        return new RegExp(target);
    }
    if (weakMap.has(target)) {
        return weakMap.get(target);
    }
    if (targetType === 'Array') {
        result = [];

        weakMap.set(target, result);

        target.forEach((element) => {
            result.push(deepClone(element, weakMap));
        });

        return result;
    }
    if (targetType === 'Object') {
        result = {};

        weakMap.set(target, result);

        if (Object.getPrototypeOf(target) !== Object.prototype) {
            let prototype = deepClone(Object.getPrototypeOf(target), weakMap);
            Object.setPrototypeOf(result, prototype);
        }

        let propertyNames = Object.getOwnPropertyNames(target);

        propertyNames.forEach((prop) => {
            result[prop] = deepClone(target[prop], weakMap);
        });

        return result;
    }
}


module.exports = deepClone;
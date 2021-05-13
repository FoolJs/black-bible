const arrayForEach = require('./arrayforEach'),
        objectForEach = require('./objectForEach'),
        mapForEach = require('./mapForEach'),
        setForEach = require('./setForEach'),
        stringForEach = require('./stringForEach'),
        numberForEach = require('./numberForEach'),
        checkedType = require('./checkedType');



/**
 * @description 适用于各种类型的forEach
 * @param {Object} target 对象
 * @param {Function} cb 对对象的元素调用的函数
 * @returns 对象本身
 */
function forEach (target, cb) {
    let type = checkedType(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayForEach;
            break;
        case 'Object':
            func = objectForEach;
            break;
        case 'Map':
            func = mapForEach;
            break;
        case 'Set':
            func = setForEach;
            break;
        case 'String':
            func = stringForEach;
            break;
        case 'Number':
            func = numberForEach;
            break;
    }

    return func(target, cb, arguments[2]);
}


module.exports = forEach;
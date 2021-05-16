const arrayForEach = require('./_arrayforEach'),
        objectForEach = require('./_objectForEach'),
        mapForEach = require('./_mapForEach'),
        setForEach = require('./_setForEach'),
        stringForEach = require('./_stringForEach'),
        numberForEach = require('./_numberForEach'),
        checkedType = require('./checkedType');



/**
 * 
 * @module
 * @description 适用于各种类型的forEach，可以通过返回false来终止循环
 * @param {Array | Map | Set | String | Number} target 对象
 * @param {Function} cb 对对象的元素调用的函数
 * @returns 对象本身
 * 
 * @example
 * 
 * _.forEach([1, 2, 3], item => console.log(item)); 1, 2, 3
 * 
 * _.forEach({name: 'Jack', age: 30}, value => console.log(value)); // 'Jack', 30
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

    return func(target, cb);
}


module.exports = forEach;
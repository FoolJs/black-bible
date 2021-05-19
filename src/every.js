const checkedType = require('./checkedType'),
        arrayEvery = require('./_arrayEvery'),
        objectEvery = require('./_objectEvery'),
        mapEvery = require('./_mapEvery'),
        setEvery = require('./_setEvery');

/**
 * 
 * @module every
 * 
 * @description every迭代函数
 * 
 * 适用于多种类型的every函数，对于对象的每个元素调用函数，若所有属性都使
 * 函数返回True则返回True，否则返回false
 * 
 * @param {Array | {} | Map | Set} target object
 * @param {Function} predicate 断言函数
 * 
 * @returns {Boolean} 是否每个元素都对函数返回True
 * 
 * @example
 * 
 * let arr = [1, 2, 3];
 * 
 * console.log( _.every(arr, item => item > 0) );  // true
 * 
 */
function every (target, predicate) {
    let func = null,
        type = checkedType(target);

    switch (type) {
        case 'Array':
            func = arrayEvery;
            break;
        case 'Object':
            func = objectEvery;
            break;
        case 'Map':
            func = mapEvery;
            break;
        case 'Set':
            func = setEvery;
            break;
    
        default:
            return target;
    }

    return func(target, predicate);
}

module.exports = every;
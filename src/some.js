
const checkedType = require('./checkedType'),
        arraySome = require('./_arraySome'),
        objectSome = require('./_objectSome'),
        mapSome = require('./_mapSome'),
        setSome = require('./_setSome');





/**
 * 
 * @module some
 * 
 * @description some迭代函数
 * 
 * 适用于多种类型的Some函数，对对象的每一项调用函数，若是有一项使函数返回True，
 * 则返回True，否则返回false
 * 
 * @param {Array | {} | Map | Set} target 对象
 * @param {Function} predicate 断言函数
 * @returns {Boolean} 
 * 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4];
 * 
 * console.log( _.some(arr, item => item > 3) );  // true
 * 
 */
function some (target, predicate) {
    let type = checkedType(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arraySome;
            break;
        case 'Object':
            func = objectSome;
            break;
        case 'Map':
            func = mapSome;
            break;
        case 'Set':
            func = setSome;
            break;
    
        default:
            return target;
    }

    return func(target, predicate);
}



module.exports = some;
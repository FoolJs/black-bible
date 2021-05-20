const checkedType = require('./checkedType'),
    upperAll = require('./_toUpperAll'),
    forEach = require('./forEach');



/**
 * 
 * @module toUpper
 * 
 * @description 将字符串或一个集合中的字符串大写，
 * 
 * 该方法会递归一个集合的所有深度，将集合的所有字符串转化为大写形式
 * 
 * 
 * @param {String | Array | Object | Map} target 想要大写的字符串或集合
 * @returns {String | Array | Object | Map} 转化完成的字符串或集合
 * 
 * @example 
 * 
 * let arr = ['aaa', {name: 'davi'}, 20];
 * 
 * // ['AAA', {name: 'DAVI'}, 20]
 * console.log(_.toUpper(['aaa', { name: 'davi' }, 20]));  
 * 
 */
function toUpper(target) {
    let type = checkedType(target),
        result = null;

    switch (type) {
        case 'String':
            result = upperAll(target);
            break;
        case 'Array':
            result = forEach( target, (item, index) => {
                target[index] = toUpper(item);
            } );
            break;
        case 'Object':
            result = forEach( target, (value, key) => {
                target[key] = toUpper(value);
            } );
            break;
        case 'Map':
            result = forEach( target, (value, key) => {
                target.set( key, toUpper(value) );
            } );
            break;
        default:
            result = target;
            break;
    }

    return result;
}

module.exports = toUpper;

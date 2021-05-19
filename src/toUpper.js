const checkedType = require('./checkedType'),
    toUpperFirst = require('./_toUpperFirst'),
    toUpperAll = require('./_toUpperAll'),
    forEach = require('./forEach');

/**
 *
 * @module toUpper
 * 
 * @description 大写转换函数
 *
 * 将一个字符串或一个数组中的所有字符串或一个对象的所有属性的值是字符串的转化为大写或首字母大写
 * 
 * @param {String | Array | {} } str 想要转化为大写的字符串或数组或对象
 * @param {Boolean} isAll 是否全字母大写，默认为True，false为首字母大写
 * 
 * @example
 * 
 * let str = 'asdw';
 * 
 * _.toUpper(str);  // 'ASDW'
 * 
 * let arr = [1, 'a', 'bc', 2];
 * 
 * _.toUpper(arr);  // [1, 'A', 'BC', 2];
 * 
 * let obj = {name: 'davi', age: 30, color: 'red'};
 * 
 * _.toUpper(obj, false);  //  {name: "Davi", age: 30, color: "Red"} 
 * 
 */
function toUpper(strs, isAll = true) {
    let func =  isAll ? toUpperAll : toUpperFirst,
        result = null;

    switch ( checkedType(strs) ) {
        case 'String':
            result = func(strs);
            break;
        case 'Array':
        case 'Object':
            result = forEach(strs, (item, index) => {
                if ( checkedType(item) === 'String' ) {
                    strs[index] = func(item);
                }
            });
            break;
        default:
            result = strs;
            break;
    }

    return result;
}

module.exports = toUpper;

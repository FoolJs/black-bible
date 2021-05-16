const checkedType = require('./checkedType'),
        arrayMap = require('./_arrayMap'),
        objectMap = require('./_objectMap'),
        mapMap = require('./_mapMap'),
        setMap = require('./_setMap'),
        stringMap = require('./_stringMap'),
        numberMap = require('./_numberMap');



/**
 * 
 * @module
 * @description 适用于各种类型的map方法
 * @param {Array | Map | Set | String | Number} target obj
 * @param {Function} fn 迭代函数
 * @returns {Array} 函数的返回值组成的数组
 * 
 * @example
 * 
 * _.map(5, item => item + '号'); // [ '0号', '1号', '2号', '3号', '4号' ]
 * 
 * _.map([1, 2, 3, 4, 5], (item, index) => index + '号'); // [ '0号', '1号', '2号', '3号', '4号' ]
 */
function map (target, fn) {
    let type = checkedType(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayMap;
            break;
        case 'Object':
            func = objectMap;
            break;
        case 'Map':
            func = mapMap;
            break;
        case 'Set':
            func = setMap;
            break;
        case 'String':
            func = stringMap;
            break;
        case 'Number':
            func = numberMap;
            break;
    }

    return func(target, fn);
}





module.exports = map;
const checkedType = require('./checkedType'),
        arrayFindRight = require('./_arrayFindRight'),
        objectFindRight = require('./_objectFindRight'),
        mapFindRight = require('./_mapFindRight'),
        setFindRight = require('./_setFindRight');



/**
 * 
 * @module findRight
 * 
 * @description find函数的反向函数
 * 
 * 从反方向开始迭代，返回第一个使函数返回True的项的值
 * 对于对象或Map，返回的将是他们的键而不是值
 * 
 * @param {Array | {} | Map | Set} target object
 * @param {Function} fn 对象每一项调用的函数
 * @param {Number} fromIndex 迭代的起始索引
 * @returns {any} 第一个使断言函数返回true的项 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4];
 * 
 * console.log( _.findRight(arr, item => item > 1) ); // 4
 * 
 */
function findRight(target, fn, fromIndex) {
    let func = null,
        type = checkedType(target);

    switch (type) {
        case 'Array':
            func = arrayFindRight;
            break;
        case 'Object':
            func = objectFindRight;
            break;
        case 'Map':
            func = mapFindRight;
            break;
        case 'Set':
            func = setFindRight;
            break;

        default:
            return target;
    }

    return func(target, fn, fromIndex);
}



module.exports = findRight;
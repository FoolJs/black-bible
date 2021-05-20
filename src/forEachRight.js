const checkedType = require('./checkedType'),
        arrayForEachRight = require('./_arrayForEachRight'),
        objectForEachRight = require('./_objectForEachRight'),
        mapForEachRight = require('./_mapForEachRight'),
        setForEachRight = require('./_setForEachRight');


/**
 * 
 * @module forEachRight
 * 
 * @description forEachRight迭代函数
 * 
 * forEach函数的反向函数，从结尾开始迭代，可以通过返回false显式的
 * 结束迭代，返回集合本身
 * 
 * @param {Array | {} | Map | Set} target 想要迭代的集合
 * @param {Function} fn 对每个元素调用的迭代函数
 * @returns {Array | {} | Map | Set}
 * 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4];
 * 
 *  _.forEachRight(arr, item => console.log(item));   // 4, 3, 2, 1
 * 
 * 
 */
function forEachRight (target, fn,) {
    let type = checkedType(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayForEachRight;
            break;
        case 'Object':
            func = objectForEachRight;
            break;
        case 'Map':
            func = mapForEachRight;
            break;
        case 'Set':
            func = setForEachRight;
            break;
    
        default:
            return target;
    }

    return func(target, fn);
}


module.exports = forEachRight;
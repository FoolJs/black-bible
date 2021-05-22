const checkedType = require('./checkedType'),
        arraySample = require('./_arraySample');


/**
 * 
 * @module sample
 * 
 * @description 随机获取集合的某一项的值
 * 
 * 随机获取集合的某一项，对于Object和Map类型来说，获取得将会是他们的
 * Key，而不是Value
 * 
 * @param {Array | Object | Map | Set | String} target 一个集合
 * @returns {any} 集合的某一项
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4];
 * 
 * // 3, 2, 2, 3, 3, 1, 2, 4, 4, 1
 * 
 * _.forEach(10, () => {
 *      console.log( _.sample(arr) )
 * })
 * 
 */

function sample (target) {
    let type = checkedType(target),
        cache = null;

    switch (type) {
        case 'Array':
        case 'String':
            cache = target;
            break;
        case 'Object':
            cache = Object.keys(target);
            break;
        case 'Map':
        case 'Set':
            cache = Array.from(target.keys());
            break;
        default:
            return target;
    }

    return arraySample(cache);
}


module.exports = sample;
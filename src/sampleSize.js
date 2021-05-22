const checkedType = require('./checkedType'),
        random = require('./random');


/**
 * 
 * @module sampleSize
 * 
 * @description 随机抽取一个集合的num个元素
 * 
 * 随机抽取一个集合的num个元素，适用于多种类型，若是num大于集合内元素的数量，会随机抽取
 * 集合所有的元素，会将抽取到的元素放到一个数组内，
 * 
 * @param {Array | Map | Set | Object | String} target 想要随机抽取的对象
 * @param {Number} num 想要获得的元素数量
 * @returns {Array} 抽取的元素组成的数组
 * 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4];
 * 
 * // [3, 1]
 * console.log(_.sampleSize(arr, 2));
 * 
 * // [2, 4, 3, 1]
 * console.log(_.sampleSize(arr, 100));
 * 
 */
function sampleSize (target, num) {
    let type = checkedType(target),
        cache = null;

    switch (type) {
        case 'Array':
            cache = target.slice();
            break;
        case 'Object':
            cache = Object.keys(target);
            break;
        case 'Map':
        case 'Set':
            cache = Array.from( target.keys() );
            break;
        case 'String':
            cache = target.split('');
            break;
        default :
            return target;
    }

    num = num > cache.length ? cache.length : num;

    let result = [];

    for (let i = 0; i < num; i++) {
        let index = random(0, cache.length - 1),
            value = cache[index];
        result.push( value );
        cache.splice(index, 1);
    }

    return result;
}




module.exports = sampleSize;
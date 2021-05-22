const checkedType = require('./checkedType'),
        forEach = require('./forEach'),
        random = require('./random');



/**
 * 
 * @module shuffle
 * 
 * @description 打乱集合的顺序
 * 
 * 打乱一个集合的顺序，不会改变原集合，而是返回一个新集合，
 * 
 * @param {Array | Object | Map | Set | String} target 想要打乱顺序的集合
 * @returns {Array | Object | Map | Set | String} 打乱顺序后的集合
 * 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4];
 * 
 * // [2, 4, 3, 1]
 * console.log(_.shuffle(arr));
 * 
 * let str = 'ABCD';
 * 
 * // 'ADBC';
 * console.log(_.shuffle(str));
 * 
 */
function shuffle (target) {
    let type = checkedType(target),
        cache = null,
        result = null,
        len = 0;

    switch (type) {
        case 'Array':
            result = [];
            cache = target.slice();
            len = cache.length;

            forEach( len, () => {
                let i = random(0, len - 1);
                result.push( cache[i] );
                cache.splice(i, 1);
                len--;
            } );
            break;
        case 'Object':
            result = {};
            cache = Object.keys(target);
            len = cache.length;

            forEach(len, () => {
                let i = random(0, len - 1),
                    key = cache[i],
                    value = target[key];
                
                result[key] = value;
                cache.splice(i, 1);
                len--;
            });
            break;
        case 'Map':
            result = new Map();
            cache = Array.from( target.keys() );
            len = cache.length;

            forEach( len, () => {
                let i = random(0, len - 1),
                    key = cache[i],
                    value = target.get(key);

                result.set(key, value);
                cache.splice(i, 1);
                len--;
            } );
            break;
        case 'Set':
            result = new Set();
            cache = Array.from( target.keys() );
            len = cache.length;

            forEach( len, () => {
                let i = random(0, len - 1),
                    value = cache[i];

                result.add(value);
                cache.splice(i, 1);
                len--;
            } );
            break;
        case 'String':
            result = '';
            cache = target.split('');
            len = cache.length;

            forEach(len, () => {
                let i = random(0, len - 1),
                    value = cache[i];

                result += value;
                cache.splice(i, 1);
                len--;
            });
            break;
        default:
            return target;
    }

    return result;
}


module.exports = shuffle;
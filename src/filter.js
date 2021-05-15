const checkedType = require('./checkedType'),
        arrayFilter = require('./_arrayFilter'),
        objectFilter = require('./_objectFilter'),
        mapFilter = require('./_mapFilter'),
        setFilter = require('./_setFilter'),
        stringFilter = require('./_stringFilter'),
        numberFilter = require('./_numberFilter');

/**
 * @description 适用于各种类型的Filter
 * @param {Array | Map | Set | String | Number} target 对象
 * @param {Function} cb 对对象的元素调用的函数
 * @returns {Array} 函数返回true的项组成的数组
 */
function filter (target, cb) {
    let type = checkedType(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayFilter;
            break;
        case 'Object':
            func = objectFilter;
            break;
        case 'Map':
            func = mapFilter;
            break;
        case 'Set':
            func = setFilter;
            break;
        case 'String':
            func = stringFilter;
            break;
        case 'Number':
            func = numberFilter;
            break;
    }

    return func( target, cb );
}




module.exports = filter;
const checkedType = require('./checkedType'),
        swapElem = require('./_swapElem'),
        swapChar = require('./_swapChar');


/**
 * 
 * 
 * @module swapIndex
 * 
 * @description 交换元素位置
 * 
 * 交换数组或字符串元素的位置，对于数组，在数组本身修改，对于字符串，会返回新的字符串
 * 
 * @param {Array | String} target 数组或字符串
 * @param {Number} i 索引
 * @param {Number} j 索引
 * @returns {Array | String}
 * 
 * @example
 * 
 * _.swapIndex([1, 2], 0, 1); // [2, 1]
 * 
 * _.swapIndex('abcd', 0, 3); // dbca
 */
function swapIndex (target, i, j) {
    if (
        isNaN( Number(i) )||
        isNaN( Number(j) )
    ) {
        return target;
    }
    let type = checkedType(target),
        func = null;

    switch (type) {
        case 'Array':
            func = swapElem;
            break;
        case 'String':
            func = swapChar;
            break;
    }

    return func(target, i, j);
}



module.exports = swapIndex;
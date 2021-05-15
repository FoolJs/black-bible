const checkedType = require('./checkedType'),
        swapElem = require('./_swapElem'),
        swapChar = require('./_swapChar');


/**
 * @description 交换数组或字符串元素的位置，对于数组，在数组本身修改，对于字符串，会返回新的字符串
 * @param {Array | String} target 数组或字符串
 * @param {Number} i 索引
 * @param {Number} j 索引
 * @returns {Array | String}
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
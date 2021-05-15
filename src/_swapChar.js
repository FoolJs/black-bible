const stringFilter = require('./_stringFilter'),
        swapElem = require('./_swapElem');

/**
 * @description 交换字符串两个字符的位置，返回新字符串
 * @param {String} str String
 * @param {Number} i 索引
 * @param {Number} j 索引
 * @returns {String}
 */
function swapChar (str, i, j) {
    let maxIndex = Math.max(i, j),
        len = str.length;

    if (maxIndex >= len) {
        return str;
    }

    return swapElem( stringFilter(str, char => true), i, j ).join('');
}



module.exports = swapChar;
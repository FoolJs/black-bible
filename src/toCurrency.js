
const map = require('./map'),
        toCurrencied = require('./_toCurrencied');




/**
 * 
 * @module toCurrency
 * 
 * @description 将一个数字转化为以逗号分隔的货币形式的字符串
 * 
 * 
 * @param {Number} num 一个数字
 * @returns {String} 货币形式的字符串
 * 
 * @example
 * 
 * //  123,456,789.123456
 * console.log( toCurrency(123456789.123456) );
 * 
 * 
 */
function toCurrency(num) {
    if (isFinite(num)) {
        return map(String(num).split('.'), (item, index) =>
            index === 0 ? toCurrencied(item) : '.' + item
        ).join('');
    }
}




module.exports = toCurrency;

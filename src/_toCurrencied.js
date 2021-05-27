

/**
 * @private
 * @param {Number} num number
 * @returns {String}
 */
function toCurrencied(num) {
    if (num.length <= 3) {
        return num;
    }
    return (
        toCurrencied(num.slice(0, num.length - 3)) +
        ',' +
        num.slice(num.length - 3)
    );
}


module.exports = toCurrencied;
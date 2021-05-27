const map = require('./map');

/**
 * @private
 * @description 将字符串的怎么转为小写
 * 
 * @param {String} str str
 * @returns {String}
 */
function _toLower (str) {
    return map(str, char => char.toLowerCase()).join('');
}


module.exports = _toLower;
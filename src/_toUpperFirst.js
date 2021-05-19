
/**
 * @description 字符串首字母大写
 * @param {String} str string
 * @returns {String}
 */
function toUpperFirst (str) {
    return str[0].toUpperCase() + str.slice(1);
}



module.exports = toUpperFirst;
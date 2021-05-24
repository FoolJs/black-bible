const checkedType = require("./checkedType");
const isNodeEnv = require("./isNodeEnv");
const isObjectLike = require("./isObjectLike");
const util = require("./_nodeUtil");


/**
 * 
 * @module isRegExp
 * 
 * @description 是否是RegExp
 * 
 * 
 * 
 * @param {*} value 检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * console.log(_.isRegExp(new RegExp()))
 * 
 */
function isRegExp (value) {
    if (isNodeEnv()) {
        return util.isRegExp(value);
    }
    return isObjectLike(value) && checkedType(value) === 'RegExp';
}


console.log(typeof new RegExp());


module.exports = isRegExp;
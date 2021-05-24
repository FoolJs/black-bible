const checkedType = require('./checkedType'),
        isObjectLike = require('./isObjectLike'),
        isNodeEnv = require('./isNodeEnv'),
        nodeUtil = require('./_nodeUtil');



/**
 * 
 * @module isDate
 * 
 * @description 值是否是Date
 * 
 * 
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 */
function isDate (value) {
    if (isNodeEnv()) {
        return nodeUtil.isDate(value);
    }
    return isObjectLike(value) && checkedType(value) === 'Date';
}



module.exports = isDate;
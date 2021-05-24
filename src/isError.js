const checkedType = require('./checkedType'),
        isObjectLike = require('./isObjectLike');


/**
 * 
 * @module isError
 * 
 * @description 是否是Error类型
 * 
 * @param {*} value 想要检查的值
 * @returns {Boolean}
 * 
 * @example
 * 
 * // true
 * console.log(_.isError(new Error()))
 * 
 */
function isError (value) {
    return isObjectLike(value) && checkedType(value) === 'Error';
}


module.exports = isError;
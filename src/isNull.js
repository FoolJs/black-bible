


/**
 * 
 * 
 * @module isNull
 * 
 * @description 检查值是否等于Null
 * 
 * 
 * @param {*} value 需要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * console.log(_.isNull(null));
 * 
 */
function isNull (value) {
    return value === null;
}


module.exports = isNull;
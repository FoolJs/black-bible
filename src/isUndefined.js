


/**
 * 
 * @module isUndefined
 * 
 * @description 检查值是否是Undefined
 * 
 * 
 * 
 * 
 * @param {*} value 需要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * 
 * // true
 * console.log( _.isUndefined(Undefined) );
 * 
 * 
 */
function isUndefined (value) {
    return typeof value === 'undefined';
}


module.exports = isUndefined;
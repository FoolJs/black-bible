const checkedType = require('./checkedType'),
        isObjectLike = require('./isObjectLike');



/**
 * 
 * @module isSymbol
 * 
 * @description 检查值是否是Symbol
 * 
 * 
 * @param {*} value 需要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * // true
 * console.log(_.isSymbol( Symbol("foo")))
 * 
 * // true
 * console.log(_.isSymbol(Object(Symbol("foo"))))
 * 
 */
function isSymbol (value) {
    return (typeof value === 'symbol') ||
            ( isObjectLike(value) && checkedType(value) === 'Symbol' );
}




module.exports = isSymbol;
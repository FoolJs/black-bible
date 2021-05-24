const checkedType = require('./checkedType'),
        isObjectLike = require('./isObjectLike');



/**
 * 
 * @module isBigInt
 * 
 * @description 值是否是BigInt类型
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
 * let bigInt1 = 123n,
 *      bigInt2 = BigInt(456),
 *      bigInt3 = Object(789n);
 *
 * // true
 * console.log( isBigInt(bigInt1) );
 * // true
 * console.log( isBigInt(bigInt2) );
 * // true
 * console.log( isBigInt(bigInt3) );
 * 
 */
function isBigInt (value) {
    return (typeof value === 'bigint') ||
            ( isObjectLike(value) && checkedType(value) === 'BigInt' );
}





module.exports = isBigInt;
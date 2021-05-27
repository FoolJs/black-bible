const checkedType = require('./checkedType');
const isObjectLike = require('./isObjectLike');


/**
 * 
 * @module isPlainObject
 * 
 * @description 检查值是否为普通对象
 * 
 * 一个普通对象为直接通过Object构造函数或对象字面量创建的对象,
 * 一个对象若是继承了其他对象也算是普通对象
 * 
 * @param {*} value 需要检查的值
 * @returns {Boolean}
 * 
 * 
 * @example
 * 
 * 
 * let o1 = {},
 *      o2 = {};
 * 
 * Object.setPrototypeOf(o1, o2);
 * 
 * 
 * // true
 * console.log(_.isPlainObject(o1))
 * 
 * 
 * // true
 * console.log(_.isPlainObject(o2))
 * 
 */
function isPlainObject (value) {
    if (!isObjectLike(value)) {
        return false;
    }

    return checkedType(value) === 'Object';
}


module.exports = isPlainObject;
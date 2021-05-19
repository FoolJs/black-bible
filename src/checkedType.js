
/**
 * @module checkedType
 * 
 * @description 判断类型的函数
 * 
 * 函数会返回对应类型的大写形式
 * 
 * @param {any} target 一个需要检查类型的值
 * @returns {String} 返回一个值对应的类型的字符串
 * @example
 * 
 *  _.checkedType({}); //  "Object"
 *  _.checkedType([]); // "Array"
 *  _.checkedType(true); // "Boolean"
 *  _.checkedType(undefined); // "Undefined"
 *  _.checkedType(null); // "Null"
 *  _.checkedType('str'); // "String"
 */
function checkedType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}





module.exports = checkedType;
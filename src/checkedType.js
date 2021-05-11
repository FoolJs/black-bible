
/**
 * @description 判断类型的函数
 * @param {*} target 一个需要检查类型的值
 * @returns 返回一个值对应的类型的字符串
 */
function checkedType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}





module.exports = checkedType;
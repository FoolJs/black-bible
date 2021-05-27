const forEach = require("./forEach");
const reduce = require("./reduce");



/**
 * 
 * @module divideBy
 * 
 * @description 求商
 * 
 * 接受一个函数作为第二参数，对集合内每个元素调用，用来决定求值的标准
 * 
 * @param {Array | Object | Map | Set} collection 集合
 * @param {Function} iterator 迭代函数
 * @returns {Number}
 * 
 * 
 * @example
 * 
 * let arr = [
 * {age: 30},
 * {name: 'xxx'},
 * {age: 30}
 * ];
 * 
 * let arrf = (o) => o.age;
 * 
 * 
 * // 1
 * console.log(_.divideBy(arr , arrf))
 * 
 */
function divideBy (collection, iterator) {
    let arr = [];

    forEach(collection, item => {
        let temp = iterator(item);

        if (temp) {
            arr.push(temp);
        }
    });

    return reduce(arr, (pre, cur) => pre / cur);
}


module.exports = divideBy;
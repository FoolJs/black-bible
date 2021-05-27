const forEach = require("./forEach");
const reduce = require("./reduce");



/**
 * 
 * @module multiplyBy
 * 
 * @description 集合的乘积
 * 
 * 接受一个函数作为第二参数，用来决定求值的标准
 * 
 * @param {Array | Map | Set | Object} collection 集合
 * @param {Function} iterator 迭代函数
 * @returns {Number}
 * 
 * 
 * @example
 * 
 * let arr = [
 * {age: 30},
 * {name: 'xxx'},
 * {age: 20}
 * ];
 * let arrf = (o) => o.age;
 * 
 * // 600
 * console.log(_.multiplyBy(arr, arrf))
 * 
 * 
 */

function multiplyBy (collection, iterator) {
    let arr = [];

    forEach(collection, item => {
        let temp = iterator(item);

        if (temp) {
            arr.push(temp);
        }
    });

    return reduce(arr, (pre, cur) => pre * cur);
}


module.exports = multiplyBy;
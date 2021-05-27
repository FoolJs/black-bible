const forEach = require("./forEach");
const reduce = require("./reduce");


/**
 * 
 * @module sumBy
 * 
 * @description 集合内元素的和
 * 
 * 接受一个函数作为第二参数，用来决定求值的标准
 * 
 * 
 * @param {Array | Object | Map | Set} collection 一个集合
 * @param {Function} iterator 用来迭代的函数
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
 * 
 * let arrf = (o) => o.age;
 * 
 * // 50
 * console.log(_.sumBy(arr, arrf))
 * 
 */
function sumBy (collection, iterator) {
    let arr = [];

    forEach(collection, item => {
        let temp = iterator(item);

        if (temp) {
            arr.push(temp);
        }
    });

    return reduce(arr, (pre, cur) => pre + cur);
}


module.exports = sumBy;
const filter = require("./filter");
const reduce = require("./reduce");



/**
 * 
 * @module maxBy
 * 
 * @description 最大值
 * 
 * 接受一个函数作为第二参数，用来决定求值的标准
 * 
 * @param {Array | Object | Map | Set} collection 集合
 * @param {Function} iterator 迭代函数
 * @returns {any}
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
 * 
 * // {age: 30}
 * console.log(_.maxBy(arr, arrf));
 * 
 */
function maxBy (collection, iterator) {

    let arr = filter(collection, item => {
        return iterator(item);
    });

    return reduce(arr, (pre, cur) => {
        return iterator(pre) > iterator(cur) ?
                pre :
                cur;
    }, arr[0]);
}



module.exports = maxBy;
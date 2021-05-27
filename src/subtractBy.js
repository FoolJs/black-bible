const reduce = require('./reduce'),
        forEach = require('./forEach');



/**
 * 
 * @module subtractBy
 * 
 * @description 集合内元素的差
 * 
 * 接受一个函数作为第二参数，对集合内每个元素调用，用来决定求值的标准
 * 
 * 
 * @param {Array | Object | Map | Set} collection 集合
 * @param {Function} iterator 迭代函数  
 * @returns {Number}
 * 
 * 
 * @example
 * 
 * let obj = {
 * name: [1, 2, 3],
 * age: [4, 5, 6],
 * color: [7, 8, 9]
 * };
 * 
 * let objf = (o) => o[0];
 * 
 * // -10
 * console.log(_.subtractBy(obj, objf));
 * 
 * 
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
 * // 10
 * console.log(_.subtractBy(arr, arrf));
 * 
 */
function subtractBy (collection, iterator) {
    let arr = [];

    forEach(collection, (item, index, coll) => {
        let temp = iterator(item);

        if ( temp ) {
            arr.push(temp);
        }
    });


    return reduce(arr, (pre, cur) => {
        return pre - cur;
    });
}





module.exports = subtractBy;
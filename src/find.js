const checkedType = require('./checkedType'),
        arrayFind = require('./_arrayFind'),
        objectFind = require('./_objectFind'),
        mapFind = require('./_mapFind'),
        setFind = require('./_setFind');



/**
 * 
 * @module find
 * 
 * @description find迭代函数
 * 
 * 适用于多种类型的find方法，它返回第一个使断言函数返回true的项,
 * 对于Object和Map类型，find返回的将不再是项，而是键值对中的键,
 * fromIndex为迭代的起点，对于数组来说，是其索引，对于对象Map等类型来说，
 * 是获取他们的所有键的数组的索引
 * 
 * @param {Array | Map | Set | {}} target object
 * @param {Function} predicate 断言函数，
 * @param {Number} fromIndex 迭代的起始索引
 * @returns {any} 第一个使断言函数返回true的项 
 * 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4, 5, 6];
 * 
 * console.log( _.find(arr, item => item > 3) );  // 4
 * 
 * let obj = {a: 1, b: 2, c: 3};
 * 
 * console.log(  _.find(obj, item => item > 2) );  // c
 * 
 */
function find(target, predicate, fromIndex=0) {
    let type = checkedType(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayFind;
            break;
        case 'Object':
            func = objectFind;
            break;
        case 'Map':
            func = mapFind;
            break;
        case 'Set':
            func = setFind;
            break;
        default:
            return target;
    }

    return func(target, predicate, fromIndex);
}



module.exports = find;
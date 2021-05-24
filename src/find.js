const arrayFind = require('./_arrayFind'),
    objectFind = require('./_objectFind'),
    mapFind = require('./_mapFind'),
    setFind = require('./_setFind'),
    isArray = require('./isArray'),
    isMap = require('./isMap'),
    isSet = require('./isSet'),
    isPlainObject = require('./isPlainObject');

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
function find(target, predicate, fromIndex = 0) {
    let func = null;

    if (isArray(target)) {
        func = arrayFind;
    } else if (isPlainObject(target)) {
        func = objectFind;
    } else if (isMap(target)) {
        func = mapFind;
    } else if (isSet(target)) {
        func = setFind;
    } else {
        return target;
    }

    return func(target, predicate, fromIndex);
}

module.exports = find;

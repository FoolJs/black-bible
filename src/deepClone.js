const forEach = require('./forEach'),
    isObject = require('./isObject'),
    isDate = require('./isDate'),
    isArray = require('./isArray'),
    isMap = require('./isMap'),
    isSet = require('./isSet'),
    isPlainObject = require('./isPlainObject'),
    isRegExp = require('./isRegExp');



/**
 * 
 * @module deepClone
 * 
 * @description 深拷贝函数
 * 
 * 一个深拷贝函数，cloneProto参数决定是否拷贝一个对象的原型，不会忽略函数，对象的
 * Symbol属性，但是对于Symbol属性，仍然传递的是Symbol的引用
 * 
 * @param {any} target 想要进行深拷贝的对象
 * @param {Boolean} cloneProto 是否拷贝对象的原型
 * @returns {any} 深拷贝后的对象
 * 
 * @example
 * 
 * let obj = {
 *      name: 'Jack',
 *      age: 30
 * };
 * 
 * let o2 = _.deepClone(obj);
 */
function deepClone(target, cloneProto=false, cache=new WeakMap()) {
    let result = null;

    if ( !isObject(target) ) {
        return target;
    }
    if (isDate(target)) {
        return new Date(target);
    }
    if (isRegExp(target)) {
        return new RegExp(target);
    }
    if ( cache.has(target) ) {
        return cache.get(target);
    }
    if (isArray(target)) {
        result = [];

        cache.set(target, result);

        forEach(target, element => {
            result.push( deepClone(element, cloneProto, cache) );
        });

        return result;
    }
    if (isMap(target)) {
        result = new Map();

        cache.set(target, result);

        forEach(target, (value, key) => {
            result.set(
                deepClone(key, cloneProto, cache),
                deepClone(value, cloneProto, cache)
            );
        });

        return result;
    }
    if (isSet(target)) {
        result = new Set();

        cache.set(target, result);

        forEach(target, value => {
            result.add( deepClone(value, cloneProto, cache) );
        });

        return result;
    }
    if (isPlainObject(value)) {
        result = {};
        cache.set(target, result);

        if (cloneProto) {
            if ( Object.getPrototypeOf(target) !== Object.prototype ) {
                let prototype = deepClone( Object.getPrototypeOf(target), cloneProto, cache );
                Object.setPrototypeOf(result, prototype);
            }
        }

        let props = Object.getOwnPropertyNames(target),
            symbolProps = Object.getOwnPropertySymbols(target);
        
        forEach(symbolProps, prop => {
            props.push(prop);
        });

        forEach(props, prop => {
            result[prop] = deepClone( target[prop], cloneProto, cache );
        });

        return result;
    }
}



module.exports = deepClone;

const checkedType = require('./checkedType.js'),
        forEach = require('./forEach');



/**
 * @description 深拷贝函数
 * @param {any} target 想要进行深拷贝的对象
 * @param {Boolean} cloneProto 是否拷贝对象的原型
 * @returns {any} 深拷贝后的对象
 */
function deepClone(target, cloneProto=false, cache=new WeakMap()) {
    let result = null,
        type = checkedType(target);

    if ( typeof target !== 'object' ) {
        return target;
    }
    if (type === 'Date') {
        return new Date(target);
    }
    if (type === 'RegExp') {
        return new RegExp(target);
    }
    if ( cache.has(target) ) {
        return cache.get(target);
    }
    if (type === 'Array') {
        result = [];

        cache.set(target, result);

        forEach(target, element => {
            result.push( deepClone(element, cloneProto, cache) );
        });

        return result;
    }
    if (type === 'Map') {
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
    if (type === 'Set') {
        result = new Set();

        cache.set(target, result);

        forEach(target, value => {
            result.add( deepClone(value, cloneProto, cache) );
        });

        return result;
    }
    if (type === 'Object') {
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

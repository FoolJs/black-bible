/**
 * @description 判断类型的函数
 * @param {any} target 一个需要检查类型的值
 * @returns {String} 返回一个值对应的类型的字符串
 */

function checkedType$5(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}





var checkedType_1 = checkedType$5;

/**
 * @description 函数柯里化的辅助函数
 * @param {Function} fn 需要柯里化的函数
 * @returns 柯里化后的函数
 */
function curry$1 (fn) {
    return function curried (...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply( this, args.concat(args2) );
            }
        }
    }
}



var curry_1 = curry$1;

/**
 * @description 数组版本的forEach，可以通过返回false停止执行
 * @param {Array} target 数组
 * @param {Function} cb 对数组每个元素调用的函数
 * @returns {Array} 数组本身
 */
function arrayForEach$1 (target, cb) {
    const len = target.length;

    for (let i = 0; i < len; i++) {
        if ( cb(target[i], i, target) === false ) {
            break;
        }
    }

    return target;
}


var _arrayforEach = arrayForEach$1;

/**
 * @description 对象版本的forEach
 * @param {Object} target  对象
 * @param {Function} cb 对对象每个属性调用的回调函数
 * @returns {Object} 对象本身
 */

function objectForEach$1(target, cb) {
    for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
            const element = target[key];
            
            if ( cb(element, key, target) === false ) {
                break;
            }
        }
    }
    return target;
}




var _objectForEach = objectForEach$1;

/**
 * @description map版forEach
 * @param {Map} target map
 * @param {Function} cb 对map的每个元素调用的函数
 * @returns map本身
 */
function mapForEach$1 (target, cb) {
    for (const iter of target) {
        let key = iter[0],
            value = iter[1];

        if ( cb(value, key, target) === false ) {
            break;
        }
    }
    return target;
}



var _mapForEach = mapForEach$1;

/**
 * @description Set版forEach
 * @param {Set} target set
 * @param {Function} cb 对set每个元素调用的函数
 * @returns set本身
 */
function setForEach$1 (target, cb) {
    for (const iter of target) {
        if ( cb(iter, iter, target) === false ) {
            break;
        }
    }
    return target;
}


var _setForEach = setForEach$1;

/**
 * @description String类型的Foreach
 * @param {String} target string
 * @param {Function} cb 对每个字符调用的函数
 * @returns string
 */
function stringForEach$1 (target, cb) {
    const len = target.length;

    for (let i = 0; i < len; i++) {
        if ( cb(target[i], i, target) === false ) {
            break;
        }
    }

    return target;
}



var _stringForEach = stringForEach$1;

/**
 * @description Number版Foreach
 * @param {Number} target number
 * @param {Function} cb 调用target次cb
 * @returns target
 */
function numberForEach$1 (target, cb) {
    let len = target;

    for (let i = 0; i < len; i++) {
        if ( cb(i, i, target) === false ) {
            break;
        }
    }

    return target;
}



var _numberForEach = numberForEach$1;

const arrayForEach = _arrayforEach,
        objectForEach = _objectForEach,
        mapForEach = _mapForEach,
        setForEach = _setForEach,
        stringForEach = _stringForEach,
        numberForEach = _numberForEach,
        checkedType$4 = checkedType_1;



/**
 * @description 适用于各种类型的forEach
 * @param {Array | Map | Set | String | Number} target 对象
 * @param {Function} cb 对对象的元素调用的函数
 * @returns 对象本身
 */
function forEach$2 (target, cb) {
    let type = checkedType$4(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayForEach;
            break;
        case 'Object':
            func = objectForEach;
            break;
        case 'Map':
            func = mapForEach;
            break;
        case 'Set':
            func = setForEach;
            break;
        case 'String':
            func = stringForEach;
            break;
        case 'Number':
            func = numberForEach;
            break;
    }

    return func(target, cb);
}


var forEach_1 = forEach$2;

const checkedType$3 = checkedType_1,
        forEach$1 = forEach_1;



/**
 * @description 深拷贝函数
 * @param {any} target 想要进行深拷贝的对象
 * @param {Boolean} cloneProto 是否拷贝对象的原型
 * @returns {any} 深拷贝后的对象
 */
function deepClone$1(target, cloneProto=false, cache=new WeakMap()) {
    let result = null,
        type = checkedType$3(target);

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

        forEach$1(target, element => {
            result.push( deepClone$1(element, cloneProto, cache) );
        });

        return result;
    }
    if (type === 'Map') {
        result = new Map();

        cache.set(target, result);

        forEach$1(target, (value, key) => {
            result.set(
                deepClone$1(key, cloneProto, cache),
                deepClone$1(value, cloneProto, cache)
            );
        });

        return result;
    }
    if (type === 'Set') {
        result = new Set();

        cache.set(target, result);

        forEach$1(target, value => {
            result.add( deepClone$1(value, cloneProto, cache) );
        });

        return result;
    }
    if (type === 'Object') {
        result = {};
        cache.set(target, result);

        if (cloneProto) {
            if ( Object.getPrototypeOf(target) !== Object.prototype ) {
                let prototype = deepClone$1( Object.getPrototypeOf(target), cloneProto, cache );
                Object.setPrototypeOf(result, prototype);
            }
        }

        let props = Object.getOwnPropertyNames(target),
            symbolProps = Object.getOwnPropertySymbols(target);
        
        forEach$1(symbolProps, prop => {
            props.push(prop);
        });

        forEach$1(props, prop => {
            result[prop] = deepClone$1( target[prop], cloneProto, cache );
        });

        return result;
    }
}



var deepClone_1 = deepClone$1;

/**
 * @description 判断一个元素是否在对应容器的可视区域内
 * @param {Object} el 判断是否在容器的目标DOM元素
 * @param {Object} container 容器DOM元素，默认为视口
 * @returns 是否在可视区域内
 */

function isInContainer$1(el, container) {
    const elRect = el.getBoundingClientRect();
    let containerRect = null;

    if (
        [window, document, document.documentElement, null, undefined].includes(
            container
        )
    ) {
        containerRect = {
            top: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
            left: 0,
        };
    } else {
        containerRect = container.getBoundingClientRect();
    }

    return (
        elRect.top < containerRect.bottom &&
        elRect.bottom > containerRect.top &&
        elRect.right > containerRect.left &&
        elRect.left < containerRect.right
    );
}


var isInContainer_1 = isInContainer$1;

/**
 * @description 防抖函数
 * @param {Function} fn 回调函数
 * @param {Number} time 延时
 * @param {Boolean} triggleNow 第一次触发是否立即执行
 * @returns 
 */
function debounce$1(fn, time, triggleNow) {
    let timerId = null;

    let debounced = function () {
        let _this = this,
            args = arguments;

        if (timerId) {
            clearTimeout(timerId);
        }

        if (triggleNow) {
            let exec = !timerId;

            timerId = setTimeout(() => {
                timerId = null;
            }, time);

            if (exec) {
                fn.apply(_this, args);
            }

        } else {
            timerId = setTimeout(() => {
                fn.apply(_this, args);
            }, time);
        }
    };

    debounced.remove = function () {
        clearTimeout(timerId);
        timerId = null;
    };

    return debounced;
}


var debounce_1 = debounce$1;

/**
 * @description 节流函数
 * @param {Function} fn 事件处理函数
 * @param {Numer} time 延时
 */
function throttle$1 (fn, time) {
    let state = true;

    let throttled = function () {
        let _this = this,
            args = arguments;

        if (!state) {
            return false;
        }
        state = false;

        setTimeout(() => {
            fn.apply(_this, args);
            state = true;
        }, time);
    };

    return throttled;
}


var throttle_1 = throttle$1;

/**
 * @description 随机数函数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @param {Boolean} floating 是否包括浮点数
 * @returns {Number} 一个数字
 */
function random$1(min,max, floating=false) {
    if (floating) {
        return min + Math.random() * (max - min);
    }
    return Math.floor(min + Math.random() * (max - min + 1));
}





var random_1 = random$1;

/**
 * @description 数组版filter
 * @param {Array} arr array
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的项组成的数组
 */
function arrayFilter$1 (arr, cb) {
    const len = arr.length,
            cache = [];

    for (let i = 0; i < len; i++) {
        if ( cb(arr[i], i, arr) ) {
            cache.push( arr[i] );
        }
    }

    return cache;
}


var _arrayFilter = arrayFilter$1;

/**
 * @description 对象版filter
 * @param {Object} obj obj
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的对象的项组成的数组
 */
function objectFilter$1 (obj, cb) {
    let cache = [];

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            
            if ( cb(element, key, obj) ) {
                cache.push(key);
            }
        }
    }

    return cache;
}


var _objectFilter = objectFilter$1;

/**
 * @description map版filter
 * @param {Map} map map
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的map的项组成的数组
 */

function mapFilter$1(map, cb) {
    let cache = [];

    for (const iterate of map) {
        let key = iterate[0],
            value = iterate[1];

        if (cb(value, key, map)) {
            cache.push(key);
        }
    }

    return cache;
}

var _mapFilter = mapFilter$1;

/**
 * @description set版filter
 * @param {Set} arr Set
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的元素组成的数组
 */

function setFilter$1(set, cb) {
    let cache = [];

    for (const value of set) {
        if (cb(value, value, set)) {
            cache.push(value);
        }
    }

    return cache;
}

var _setFilter = setFilter$1;

/**
 * @description 字符串版filter
 * @param {String} str String
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的字符组成的数组
 */
function stringFilter$2 (str, cb) {
    let cache = [],
        len = str.length;

    for (let i = 0; i < len; i++) {
        if ( cb(str[i], i, str) ) {
            cache.push( str[i] );
        }
    }

    return cache;
}


var _stringFilter = stringFilter$2;

/**
 * @description 数字版filter
 * @param {Number} num number
 * @param {Function} cb 调用tnum次cb
 * @returns 函数返回true的项组成的数组
 */
function numberFilter$1 (num, cb) {
    let len = num,
        cache = [];

    for (let i = 0; i < len; i++) {
        if ( cb(i, i, num) ) {
            cache.push(i);
        }
    }

    return cache;
}

var _numberFilter = numberFilter$1;

const checkedType$2 = checkedType_1,
        arrayFilter = _arrayFilter,
        objectFilter = _objectFilter,
        mapFilter = _mapFilter,
        setFilter = _setFilter,
        stringFilter$1 = _stringFilter,
        numberFilter = _numberFilter;

/**
 * @description 适用于各种类型的Filter
 * @param {Array | Map | Set | String | Number} target 对象
 * @param {Function} cb 对对象的元素调用的函数
 * @returns {Array} 函数返回true的项组成的数组
 */
function filter$1 (target, cb) {
    let type = checkedType$2(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayFilter;
            break;
        case 'Object':
            func = objectFilter;
            break;
        case 'Map':
            func = mapFilter;
            break;
        case 'Set':
            func = setFilter;
            break;
        case 'String':
            func = stringFilter$1;
            break;
        case 'Number':
            func = numberFilter;
            break;
    }

    return func( target, cb );
}




var filter_1 = filter$1;

/**
 * @description 交换数组i和j位置的元素
 * @param {Array} arr 数组
 * @param {Number} i 索引
 * @param {Number} j 索引
 * @returns 交换元素后的数组
 */
function swapElem$2 (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}



var _swapElem = swapElem$2;

const stringFilter = _stringFilter,
        swapElem$1 = _swapElem;

/**
 * @description 交换字符串两个字符的位置，返回新字符串
 * @param {String} str String
 * @param {Number} i 索引
 * @param {Number} j 索引
 * @returns {String}
 */
function swapChar$1 (str, i, j) {
    let maxIndex = Math.max(i, j),
        len = str.length;

    if (maxIndex >= len) {
        return str;
    }

    return swapElem$1( stringFilter(str, char => true), i, j ).join('');
}



var _swapChar = swapChar$1;

const checkedType$1 = checkedType_1,
        swapElem = _swapElem,
        swapChar = _swapChar;


/**
 * @description 交换数组或字符串元素的位置，对于数组，在数组本身修改，对于字符串，会返回新的字符串
 * @param {Array | String} target 数组或字符串
 * @param {Number} i 索引
 * @param {Number} j 索引
 * @returns {Array | String}
 */
function swapIndex$1 (target, i, j) {
    if (
        isNaN( Number(i) )||
        isNaN( Number(j) )
    ) {
        return target;
    }
    let type = checkedType$1(target),
        func = null;

    switch (type) {
        case 'Array':
            func = swapElem;
            break;
        case 'String':
            func = swapChar;
            break;
    }

    return func(target, i, j);
}



var swapIndex_1 = swapIndex$1;

const checkedType = checkedType_1,
    curry = curry_1,
    deepClone = deepClone_1,
    isInContainer = isInContainer_1,
    debounce = debounce_1,
    throttle = throttle_1,
    random = random_1,
    forEach = forEach_1,
    filter = filter_1,
    swapIndex = swapIndex_1;





var src = {
    checkedType,
    curry,
    deepClone,
    isInContainer,
    debounce,
    throttle,
    random,
    forEach,
    filter,
    swapIndex
};

export default src;

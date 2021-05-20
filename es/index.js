/**
 * @module checkedType
 * 
 * @description 判断类型的函数
 * 
 * 函数会返回对应类型的大写形式
 * 
 * @param {any} target 一个需要检查类型的值
 * @returns {String} 返回一个值对应的类型的字符串
 * @example
 * 
 *  _.checkedType({}); //  "Object"
 *  _.checkedType([]); // "Array"
 *  _.checkedType(true); // "Boolean"
 *  _.checkedType(undefined); // "Undefined"
 *  _.checkedType(null); // "Null"
 *  _.checkedType('str'); // "String"
 */
function checkedType$g(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}





var checkedType_1 = checkedType$g;

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

const arrayForEach = _arrayforEach,
        objectForEach = _objectForEach,
        mapForEach = _mapForEach,
        setForEach = _setForEach,
        numberForEach = _numberForEach,
        stringForEach = _stringForEach,
        checkedType$f = checkedType_1;



/**
 * 
 * @module forEach
 * 
 * @description forEach迭代函数
 * 
 * 适用于各种类型的forEach，对集合的每一项运行函数，最终返回集合本身，
 * 可以显式的通过返回false来终止循环
 * 
 * @param {Array | Map | Set | String | Number | {}} target 对象
 * @param {Function} cb 对对象的元素调用的函数
 * @returns {Array | Map | Set | String | Number | {}} 集合本身
 * 
 * @example
 * 
 * _.forEach([1, 2, 3], item => console.log(item)); 1, 2, 3
 * 
 * _.forEach({name: 'Jack', age: 30}, value => console.log(value)); // 'Jack', 30
 */
function forEach$7 (target, cb) {
    let type = checkedType$f(target),
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
        case 'Number':
            func = numberForEach;
            break;
        case 'String':
            func = stringForEach;
            break;
    }

    return func(target, cb);
}


var forEach_1 = forEach$7;

const forEach$6 = forEach_1;

/**
 *
 * @module
 * 
 * @description 函数柯里化的辅助函数
 * 
 * 接受一个函数fn和可选的用于函数fn的参数，返回柯里化后的函数fn，即使函数fn的参数已经满足
 * 同样会返回一个函数而不是fn调用的结果
 * 
 * @param {Function} fn 想要柯里化的函数
 * @param  {...any} args 函数fn所需要的参数
 * @returns {Function} 柯里化后的函数
 *
 * @example
 *  function add (a, b, c, d) {
 *      console.log(a + b + c + d);
 *  }
 *
 * let curried = _.curry(add, 1, 1, 1, 1);
 *
 * curried();  // 4
 *
 * let curried2 = _.curry(add);
 *
 * curried2(1)(1)(1)(1);  // 4
 *
 * curried2(1, 1)(1)(1);  // 4
 *
 * curried2(1, 1, 1)(1);  // 4
 *
 *
 */
function curry$1 (fn, ...args) {
    if (args.length >= fn.length) {
        return function () {
            return fn.apply(this, args);
        };
    }
    let cache = [...args];

    return function curried(...args2) {
        forEach$6(args2, item => {
            cache.push(item);
        });

        if (cache.length >= fn.length) {
            return fn.apply(this, cache);
        }
        return function (...args3) {
            return curried.apply(this, args3);
        };
    };
}

var curry_1 = curry$1;

const checkedType$e = checkedType_1,
        forEach$5 = forEach_1;



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
function deepClone$1(target, cloneProto=false, cache=new WeakMap()) {
    let result = null,
        type = checkedType$e(target);

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

        forEach$5(target, element => {
            result.push( deepClone$1(element, cloneProto, cache) );
        });

        return result;
    }
    if (type === 'Map') {
        result = new Map();

        cache.set(target, result);

        forEach$5(target, (value, key) => {
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

        forEach$5(target, value => {
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
        
        forEach$5(symbolProps, prop => {
            props.push(prop);
        });

        forEach$5(props, prop => {
            result[prop] = deepClone$1( target[prop], cloneProto, cache );
        });

        return result;
    }
}



var deepClone_1 = deepClone$1;

/**
 * 
 * @module isInContainer
 * 
 * @description 判断一个元素是否在对应容器的可视区域内
 * 
 * 
 * @param {Object} el 判断是否在容器的目标DOM元素
 * @param {Object} container 容器DOM元素，默认为视口
 * @returns {Boolean} 是否在可视区域内
 * 
 * 
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

const NO_FUNCTION_ERROR = 'cb is not a function';


/**
 * 
 * @module debounce
 * 
 * 
 * @description 创建一个防抖函数
 * 
 * 
 * 创建一个防抖函数，根据option选项对象来决定delay延时开始前或结束
 * 后调用回调函数，其中option.before决定是否在延时开始之前触发回调，若是为false，那么
 * 无论option.after为true还是false，都会在延时结束后触发回调，option.after决定是否
 * 在延时结束之后触发回调，函数返回的防抖函数拥有一个cancel方法，用来取消延时调用
 * 
 * @param {Function} cb 回调函数
 * @param {0} delay 延时
 * @param {{before: false, after: true}} option 选项对象
 * @param {Boolean} [option.before] 是否在延时开始之前触发回调
 * @param {Boolean} [option.after] 是否在延时结束之后触发回调
 * @returns {Function} debounced 防抖函数
 * 
 * @example
 * 
 * function go () {
        console.log('scroll');
 * }
 *
 * window.addEventListener( 'scroll', _.debounce(go, 1000) );
 * 
 * window.addEventListener( 'scroll', _.debounce(go, 1000, {before: true, after: true}) );
 * 
 * 
 */
function debounce$1(cb, delay=0, option = { before: false, after: true }) {
    let timerId = null;

    if (typeof cb !== 'function') {
        throw new Error(NO_FUNCTION_ERROR);
    }

    const cancel = () => {
        clearTimeout(timerId);
        timerId = null;
    };

    const debounced = (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }

        if (option.before) {
            if (!timerId) {
                cb(...args);
            }
            timerId = setTimeout(() => {
                cancel();
                if (option.after) {
                    cb(...args);
                }
            }, delay);
        } else {
            timerId = setTimeout(() => {
                cb(...args);
                cancel();
            }, delay);
        }

    };

    debounced.cancel = cancel;

    return debounced;
}

var debounce_1 = debounce$1;

/**
 * 
 * @module throttle
 * 
 * @description 节流函数
 * 
 * 
 * 
 * @param {Function} fn 事件处理函数
 * @param {Numer} time 延时
 * @returns {Function} 节流后的函数
 * 
 * 
 * @example
 * 
 * function go () {
        console.log('scroll');
 * }
 *
 * window.addEventListener( 'scroll', _.throttle(go, 1000) );
 * 
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
 * 
 * @module random
 * 
 * @description 随机数函数
 * 
 * 返回min-max之间的随机数，包括min和max，默认返回整数
 * 
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @param {Boolean} floating 是否包括浮点数
 * @returns {Number} 一个数字
 * 
 * @example
 * 
 * // 2, 5, 1, 1, 2
 * _.forEach(5, () => {
 * console.log( _.random(1, 5) );
 * });
 * 
 * 
 */
function random$1(min,max, floating=false) {
    if (floating) {
        return min + Math.random() * (max - min);
    }
    return Math.floor(min + Math.random() * (max - min + 1));
}





var random_1 = random$1;

/**
 * 
 * @param {Array} arr array
 * @param {Function} fn func
 * @returns {Array}
 */
function arrayForEachRight$1 (arr, fn) {
    let len = arr.length;

    for (let i = len - 1; i >= 0; i-- ) {
        if ( fn(arr[i], i, arr) === false ) {
            break;
        }
    }

    return arr;
}



var _arrayForEachRight = arrayForEachRight$1;

/**
 * 
 * @param {Object} obj obj
 * @param {Function} fn func
 * @returns {Object}
 */
function objectForEachRight$1 (obj, fn) {
    let keys = Object.keys(obj),
        len = keys.length;

    for (let i = len - 1; i >= 0; i--) {
        let key = keys[i],
            value = obj[key];

        if ( fn(value, key, obj) === false ) {
            break;
        }
    }

    return obj;
}


var _objectForEachRight = objectForEachRight$1;

/**
 * 
 * @param {Map} map map
 * @param {Function} fn func
 * @returns {Map}
 */
function mapForEachRight$1 (map, fn) {
    let keys = Array.from( map.keys() ),
        len = keys.length;

    for (let i = len - 1; i >= 0 ; i--) {
        let key = keys[i],
            value = map.get(key);

        if ( fn(value, key, map) === false ) {
            break;
        }
    }

    return map;
}


var _mapForEachRight = mapForEachRight$1;

/**
 * 
 * @param {Set} set set
 * @param {Function} fn func
 * @returns {Set}
 */
function setForEachRight$1 (set, fn) {
    let keys = Array.from( set.keys() ),
        len = keys.length;

    for (let i = len - 1; i >= 0; i--) {
        let value = keys[i];

        if ( fn(value, value, set) === false ) {
            break;
        }
    }

    return set;
}


var _setForEachRight = setForEachRight$1;

const checkedType$d = checkedType_1,
        arrayForEachRight = _arrayForEachRight,
        objectForEachRight = _objectForEachRight,
        mapForEachRight = _mapForEachRight,
        setForEachRight = _setForEachRight;


/**
 * 
 * @module forEachRight
 * 
 * @description forEachRight迭代函数
 * 
 * forEach函数的反向函数，从结尾开始迭代，可以通过返回false显式的
 * 结束迭代，返回集合本身
 * 
 * @param {Array | {} | Map | Set} target 想要迭代的集合
 * @param {Function} fn 对每个元素调用的迭代函数
 * @returns {Array | {} | Map | Set}
 * 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4];
 * 
 *  _.forEachRight(arr, item => console.log(item));   // 4, 3, 2, 1
 * 
 * 
 */
function forEachRight$1 (target, fn,) {
    let type = checkedType$d(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayForEachRight;
            break;
        case 'Object':
            func = objectForEachRight;
            break;
        case 'Map':
            func = mapForEachRight;
            break;
        case 'Set':
            func = setForEachRight;
            break;
    
        default:
            return target;
    }

    return func(target, fn);
}


var forEachRight_1 = forEachRight$1;

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

const checkedType$c = checkedType_1,
        arrayFilter = _arrayFilter,
        objectFilter = _objectFilter,
        mapFilter = _mapFilter,
        setFilter = _setFilter,
        stringFilter$1 = _stringFilter,
        numberFilter = _numberFilter;

/**
 * 
 * @module filter
 * 
 * @description 适用于各种类型的Filter迭代函数
 * 
 * 适用于各种类型的Filter迭代函数，对于集合的每一项调用函数，返回函数返回True的
 * 项组成的数组
 * 
 * @param {Array | Map | Set | String | Number} target 对象
 * @param {Function} cb 对对象的元素调用的函数
 * @returns {Array} 函数返回true的项组成的数组
 * 
 * @example
 * 
 * _.filter([1, 2, 3, 4], item => item % 2 === 0);   // [2, 4]
 * 
 * _.filter('Jack', char => true);  // ['J', 'a', 'c', 'k']
 * 
 * _.filter(5, n => true);   // [0, 1, 2, 3, 4];
 */
function filter$2 (target, cb) {
    let type = checkedType$c(target),
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
        case 'Number':
            func = numberFilter;
            break;
        case 'String':
            func = stringFilter$1;
            break;
    }

    return func( target, cb );
}




var filter_1 = filter$2;

/**
 * @description 数组版map迭代方法
 * @param {Array} arr 数组
 * @param {Function} fn func
 * @returns {Array}
 */
function arrayMap$1 (arr, fn) {
    let len = arr.length,
        cache = [];

    for (let i = 0; i < len; i++) {
        cache.push( fn(arr[i], i, arr) );
    }

    return cache;
}


var _arrayMap = arrayMap$1;

/**
 * 
 * @param {Object} obj 
 * @param {Function} fn 
 * @returns {Array}
 */
function objectMap$1 (obj, fn) {
    let cache = [];

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            cache.push( fn(element, key, obj) );
        }
    }

    return cache;
}


var _objectMap = objectMap$1;

/**
 * @description map版map
 * @param {Map} map map
 * @param {Function} fn func
 * @returns {Array}
 */
function mapMap$1 (map, fn) {
    let cache = [];

    for (const iterate of map) {
        cache.push( fn(iterate[1], iterate[0], map) );
    }

    return cache;
}


var _mapMap = mapMap$1;

/**
 * 
 * @param {Set} set 
 * @param {Function} fn 
 * @returns {Array}
 */
function setMap$1 (set, fn) {
    let cache = [];

    for (const iterate of set) {
        cache.push( fn(iterate, iterate, set) );
    }

    return cache;
}


var _setMap = setMap$1;

/**
 * @param {String} str 
 * @param {Function} fn 
 * @returns {Array}
 */
function stringMap$1 (str, fn) {
    let len = str.length,
        cache = [];

    for (let i = 0; i < len; i++) {
        cache.push( fn(str[i], i, str) );
    }

    return cache;
}



var _stringMap = stringMap$1;

/**
 * @param {Number} num number
 * @param {Function} fn func
 * @returns {Array}
 */
function numberMap$1 (num, fn) {
    let len = num,
        cache = [];

    for (let i = 0; i < len; i++) {
        cache.push( fn(i, i, num) );
    }

    return cache;
}



var _numberMap = numberMap$1;

const checkedType$b = checkedType_1,
        arrayMap = _arrayMap,
        objectMap = _objectMap,
        mapMap = _mapMap,
        setMap = _setMap,
        stringMap = _stringMap,
        numberMap = _numberMap;



/**
 * 
 * @module map
 * 
 * @description map迭代函数
 * 
 * 适用于各种类型的map迭代函数，对集合的每一项调用函数fn，返回函数
 * 的返回值组成的数组
 * 
 * 
 * @param {Array | Map | Set | String | Number} target obj
 * @param {Function} fn 迭代函数
 * @returns {Array} 函数的返回值组成的数组
 * 
 * @example
 * 
 * _.map(5, item => item + '号'); // [ '0号', '1号', '2号', '3号', '4号' ]
 * 
 * _.map([1, 2, 3, 4, 5], (item, index) => index + '号'); // [ '0号', '1号', '2号', '3号', '4号' ]
 */
function map$5 (target, fn) {
    let type = checkedType$b(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayMap;
            break;
        case 'Object':
            func = objectMap;
            break;
        case 'Map':
            func = mapMap;
            break;
        case 'Set':
            func = setMap;
            break;
        case 'String':
            func = stringMap;
            break;
        case 'Number':
            func = numberMap;
            break;
    }

    return func(target, fn);
}





var map_1 = map$5;

/**
 * 
 * @param {Array} arr array
 * @param {Function} predicate 断言函数
 * @param {Number} fromIndex 起始索引
 * @returns {any} 第一个使函数返回True的项的
 */
function arrayFind$1(arr, predicate, fromIndex) {
    let len = arr.length;

    for (; fromIndex < len; fromIndex++) {
        if ( predicate(arr[fromIndex], fromIndex, arr) ) {
            return arr[fromIndex];
        }
    }
}



var _arrayFind = arrayFind$1;

/**
 * 
 * @param {{}} obj object
 * @param {Function} predicate 断言函数
 * @param {Number} fromIndex 索引
 */

function objectFind$1(obj, predicate, fromIndex) {
    let keys = Object.keys(obj);

    for (; fromIndex < keys.length; fromIndex++) {
        let key = keys[fromIndex],
            value = obj[key];

        if ( predicate(value, key, obj) ) {
            return key;
        }
    }
}




var _objectFind = objectFind$1;

/**
 * 
 * @param {Map} map map
 * @param {Function} predicate 断言函数
 * @param {Number} fromIndex 
 */

function mapFind$1(map, predicate, fromIndex) {
    let keys = Array.from( map.keys() );

    for (; fromIndex < keys.length; fromIndex++) {
        let key = keys[fromIndex],
            value = map.get(key);

        if ( predicate(value, key, map) ) {
            return key;
        }
    }
}



var _mapFind = mapFind$1;

/**
 * 
 * @param {Set} set set
 * @param {Function} predicate 断言
 * @param {Number} fromIndex 
 */
function setFind$1(set, predicate, fromIndex) {
    let keys = Array.from( set.keys() );
    
    for (; fromIndex < keys.length; fromIndex++) {
        let value = keys[ fromIndex ];

        if ( predicate(value, value, set) ) {
            return value;
        }
    }
}



var _setFind = setFind$1;

const checkedType$a = checkedType_1,
        arrayFind = _arrayFind,
        objectFind = _objectFind,
        mapFind = _mapFind,
        setFind = _setFind;



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
function find$1(target, predicate, fromIndex=0) {
    let type = checkedType$a(target),
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



var find_1 = find$1;

/**
 * 
 * @param {Array} array array
 * @param {Function} fn 断言函数
 * @param {Number} fromIndex 
 */
function arrayFindRight$1(array, fn, fromIndex) {
    fromIndex = fromIndex ? fromIndex : array.length - 1;

    for (; fromIndex >= 0; fromIndex--) {
        if ( fn(array[fromIndex], fromIndex, array) ) {
            return array[fromIndex];
        }
    }
}




var _arrayFindRight = arrayFindRight$1;

/**
 * 
 * @param {Object} obj object
 * @param {Function} fn 断言函数
 * @param {Number} fromIndex 索引
 * 
 */
function objectFindRight$1(obj, fn, fromIndex) {
    let keys = Object.keys(obj);
    fromIndex = fromIndex ? fromIndex : keys.length - 1;

    for (; fromIndex >= 0; fromIndex--) {
        let key = keys[fromIndex],
            value = obj[key];

        if ( fn(value, key, obj) ) {
            return key;
        }
    }
}


var _objectFindRight = objectFindRight$1;

/**
 * 
 * @param {Map} map map
 * @param {Function} fn 断言
 * @param {Number} fromIndex 索引
 * 
 */
function mapFindRight$1(map, fn, fromIndex) {
    let keys = Array.from( map.keys() );
    fromIndex = fromIndex ? fromIndex : keys.length;

    for (; fromIndex >= 0; fromIndex--) {
        let key = keys[fromIndex],
            value = map.get(key);

        if ( fn(value, key, map) ) {
            return key;
        }
    }
}


var _mapFindRight = mapFindRight$1;

/**
 * 
 * @param {Set} set set
 * @param {Function} fn 断言
 * @param {Number} fromIndex 索引
 * 
 */
function setFindRight$1(set, fn, fromIndex) {
    let keys = Array.from( set.keys() );
    fromIndex = fromIndex ? fromIndex : keys.length - 1;

    for (; fromIndex >= 0; fromIndex--) {
        let value = keys[fromIndex];

        if ( fn(value, value, set) ) {
            return value;
        }
    }
}


var _setFindRight = setFindRight$1;

const checkedType$9 = checkedType_1,
        arrayFindRight = _arrayFindRight,
        objectFindRight = _objectFindRight,
        mapFindRight = _mapFindRight,
        setFindRight = _setFindRight;



/**
 * 
 * @module findRight
 * 
 * @description find函数的反向函数
 * 
 * 从反方向开始迭代，返回第一个使函数返回True的项的值
 * 对于对象或Map，返回的将是他们的键而不是值
 * 
 * @param {Array | {} | Map | Set} target object
 * @param {Function} fn 对象每一项调用的函数
 * @param {Number} fromIndex 迭代的起始索引
 * @returns {any} 第一个使断言函数返回true的项 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4];
 * 
 * console.log( _.findRight(arr, item => item > 1) ); // 4
 * 
 */
function findRight$1(target, fn, fromIndex) {
    let func = null,
        type = checkedType$9(target);

    switch (type) {
        case 'Array':
            func = arrayFindRight;
            break;
        case 'Object':
            func = objectFindRight;
            break;
        case 'Map':
            func = mapFindRight;
            break;
        case 'Set':
            func = setFindRight;
            break;

        default:
            return target;
    }

    return func(target, fn, fromIndex);
}



var findRight_1 = findRight$1;

/**
 * 
 * @param {Array} arr array
 * @param {Function} predicate 断言
 * 
 */
function arrayEvery$1(arr, predicate) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {

        if ( !predicate(arr[i], i, arr) ) {
            return false;
        }
    }
    return true;
}


var _arrayEvery = arrayEvery$1;

/**
 * 
 * @param {{}} obj object
 * @param {Function} predicate 断言
 * 
 */
function objectEvery$1 (obj, predicate) {

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            
            if ( !predicate(element, key, obj) ) {
                return false;
            }
        }
    }
    return true;
}


var _objectEvery = objectEvery$1;

/**
 * 
 * @param {Map} map map
 * @param {Function} predicate 断言
 * @returns 
 */
function mapEvery$1 (map, predicate) {

    for (const iterate of map) {
        let key = iterate[0],
            value = iterate[1];

        if ( !predicate(value, key, map) ) {
            return false;
        }
    }

    return true;
}


var _mapEvery = mapEvery$1;

/**
 * 
 * @param {Set} set set
 * @param {Function} predicate 断言
 * @returns {Boolean}
 */
function setEvery$1 (set, predicate) {

    for (const iterate of set) {
        let value = iterate;

        if ( !predicate(value, value, set) ) {
            return false;
        }
    }

    return true;
}


var _setEvery = setEvery$1;

const checkedType$8 = checkedType_1,
        arrayEvery = _arrayEvery,
        objectEvery = _objectEvery,
        mapEvery = _mapEvery,
        setEvery = _setEvery;

/**
 * 
 * @module every
 * 
 * @description every迭代函数
 * 
 * 适用于多种类型的every函数，对于对象的每个元素调用函数，若所有属性都使
 * 函数返回True则返回True，否则返回false
 * 
 * @param {Array | {} | Map | Set} target object
 * @param {Function} predicate 断言函数
 * 
 * @returns {Boolean} 是否每个元素都对函数返回True
 * 
 * @example
 * 
 * let arr = [1, 2, 3];
 * 
 * console.log( _.every(arr, item => item > 0) );  // true
 * 
 */
function every$1 (target, predicate) {
    let func = null,
        type = checkedType$8(target);

    switch (type) {
        case 'Array':
            func = arrayEvery;
            break;
        case 'Object':
            func = objectEvery;
            break;
        case 'Map':
            func = mapEvery;
            break;
        case 'Set':
            func = setEvery;
            break;
    
        default:
            return target;
    }

    return func(target, predicate);
}

var every_1 = every$1;

/**
 * 
 * @param {Array} arr array
 * @param {Function} predicate 断言
 * @returns {Boolean}
 */
function arraySome$1 (arr, predicate) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        if ( predicate(arr[i], i, arr) ) {
            return true;
        }
    }

    return false;
}


var _arraySome = arraySome$1;

/**
 *  
 * @param {{}} obj object
 * @param {Function} predicate 断言
 */
function objectSome$1(obj, predicate) {

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            
            if ( predicate(element, key, obj) ) {
                return true;
            }
        }
    }

    return false;
}

var _objectSome = objectSome$1;

/**
 *  
 * @param {Map} map map
 * @param {Function} predicate 断言
 */
function mapSome$1(map, predicate) {

    for (const iterate of map) {
        let key = iterate[0],
            value = iterate[1];

        if ( predicate(value, key, map) ) {
            return true;
        }
    }

    return false;
}


var _mapSome = mapSome$1;

/**
 * 
 * @param {Set} set set
 * @param {Function} predicate 断言
 * @returns {Boolean}
 */
function setSome$1(set, predicate) {

    for (const iterate of set) {
        
        if ( predicate(iterate, iterate, set) ) {
            return true;
        }
    }

    return false;
}


var _setSome = setSome$1;

const checkedType$7 = checkedType_1,
        arraySome = _arraySome,
        objectSome = _objectSome,
        mapSome = _mapSome,
        setSome = _setSome;





/**
 * 
 * @module some
 * 
 * @description some迭代函数
 * 
 * 适用于多种类型的Some函数，对对象的每一项调用函数，若是有一项使函数返回True，
 * 则返回True，否则返回false
 * 
 * @param {Array | {} | Map | Set} target 对象
 * @param {Function} predicate 断言函数
 * @returns {Boolean} 
 * 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4];
 * 
 * console.log( _.some(arr, item => item > 3) );  // true
 * 
 */
function some$1 (target, predicate) {
    let type = checkedType$7(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arraySome;
            break;
        case 'Object':
            func = objectSome;
            break;
        case 'Map':
            func = mapSome;
            break;
        case 'Set':
            func = setSome;
            break;
    
        default:
            return target;
    }

    return func(target, predicate);
}



var some_1 = some$1;

/**
 * 
 * @param {Array} arr arr
 * @param {Function} fn func
 * @param {any} accumulator 初始值 
 * @returns {any}
 */
function arrayReduce$1(arr, fn, accumulator) {
    let len = arr.length,
        initValue = accumulator !== undefined ? accumulator : arr[0],
        i = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let result = fn( initValue, arr[i], i, arr );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}


var _arrayReduce = arrayReduce$1;

/**
 * 
 * @param {Object} obj obj
 * @param {Function} fn func
 * @param {any} accumulator 
 * @returns {any}
 */

function objectReduce$1 (obj, fn, accumulator) {
    let keys = Object.keys(obj),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : obj[ keys[0] ],
        i = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let key = keys[i],
            result = fn(initValue, obj[key], key, obj);

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



var _objectReduce = objectReduce$1;

/**
 * 
 * @param {String} str string
 * @param {Function} fn func
 * @param {any} accumulator 
 * @returns {any}
 */
function stringReduce$1(str, fn, accumulator) {
    let len = str.length,
        initValue = accumulator !== undefined ? accumulator : str[0],
        i = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let result = fn( initValue, str[i], i, str );

        if (result === false) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



var _stringReduce = stringReduce$1;

/**
 * 
 * @param {Map} map map
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 * 
 * 
 */
function mapReduce$1(map, fn, accumulator) {

    let keys = Array.from( map.keys() ),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : map.get( keys[0] ),
        i = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let key = keys[i],
            result = fn( initValue, map.get(key), key, map );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



var _mapReduce = mapReduce$1;

/**
 * 
 * @param {Set} set set
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function setReduce$1 (set, fn, accumulator) {
    let keys = Array.from( set.keys() ),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : keys[0],
        i  = accumulator !== undefined ? 0 : 1;

    for (; i < len; i++) {
        let value = keys[i],
            result = fn( initValue, value, value, set );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



var _setReduce = setReduce$1;

const checkedType$6 = checkedType_1,
        arrayReduce = _arrayReduce,
        objectReduce = _objectReduce,
        stringReduce = _stringReduce,
        mapReduce = _mapReduce,
        setReduce = _setReduce;

/**
 * @module reduce
 * 
 * @description reduce归并函数
 * 
 * 适用于多种类型的归并函数，函数接受四个参数，
 * 前一项的值，当前项的值，当前项的索引，对象本身，函数的返回值会作为第一个
 * 参数自动传给下一项，也可以通过使函数返回false终止迭代
 * 
 * @param {Array| String | {} | Map | Set} target obj
 * @param {Function} fn 对目标每一项调用的函数
 * @param {any} accumulator 初始值
 * @returns {any} 函数fn最终的返回值
 * 
 * @example
 * 
 * let o = {a: 1, b: 2, c: 3};
 * 
 * // 6
 * let result = _reduce(o, (cur, pre) => {
 *      return pre + cur;
 * });
 * 
 * 
 */
function reduce$2(target, fn, accumulator) {
    let type = checkedType$6(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayReduce;
            break;
        case 'Object':
            func = objectReduce;
            break;
        case 'String':
            func = stringReduce;
            break;
        case 'Map':
            func = mapReduce;
            break;
        case 'Set':
            func = setReduce;
            break;

        default:
            return target;
    }

    return func(target, fn, accumulator);
}




var reduce_1 = reduce$2;

/**
 * 
 * @param {Array} arr array
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function arrayReduceRight$1 (arr, fn, accumulator) {
    let len = arr.length,
        initValue = accumulator !== undefined ? accumulator : arr[ len - 1 ],
        i = accumulator !== undefined ? len - 1 : len - 2;

    for (; i >= 0; i--) {
        let result = fn( initValue, arr[i], i, arr );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



var _arrayReduceRight = arrayReduceRight$1;

/**
 * 
 * @param {Map} map map
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function mapReduceRight$1 (map, fn, accumulator) {
    let keys = Array.from( map.keys() ),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : map.get( keys[len - 1] ),
        i = accumulator !== undefined ? len - 1 : len - 2;

    for (; i >= 0; i--) {
        let key = keys[i],
            value = map.get(key),
            result = fn( initValue, value, key, map );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}



var _mapReduceRight = mapReduceRight$1;

/**
 * 
 * @param {{}} obj obj
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function objectReduceRight$1 (obj, fn, accumulator) {
    let keys = Object.keys(obj),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : obj[ keys[len - 1] ],
        i = accumulator !== undefined ? len - 1 : len - 2;

    for (; i >= 0; i--) {
        let key = keys[i],
            value = obj[key],
            result = fn( initValue, value, key, obj );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}


var _objectReduceRight = objectReduceRight$1;

/**
 * 
 * @param {Set} set set
 * @param {Function} fn func
 * @param {any} accumulator 初始值
 */
function setReduceRight$1 (set, fn, accumulator) {
    let keys = Array.from( set.keys() ),
        len = keys.length,
        initValue = accumulator !== undefined ? accumulator : keys[ len - 1 ],
        i = accumulator !== undefined ? len - 1 : len - 2;

    for (; i >= 0; i--) {
        let value = keys[i],
            result = fn( initValue, value, value, set );

        if ( result === false ) {
            break;
        } else {
            initValue = result;
        }
    }

    return initValue;
}


var _setReduceRight = setReduceRight$1;

const checkedType$5 = checkedType_1,
        arrayReduceRight = _arrayReduceRight,
        mapReduceRight = _mapReduceRight,
        objectReduceRight = _objectReduceRight,
        setReduceRight = _setReduceRight;





/**
 * 
 * @module reduceRight
 * 
 * @description rediceRight归并函数
 * 
 * reduce函数的反向函数，从反方向开始迭代，对每一项调用函数fn，
 * 函数fn接受4个参数，前一项的值，当前项的值，当前项的索引，对象本身，
 * 若accumulator存在，则从第一项开始迭代，否则，从第二项开始迭代
 * 若fn函数显式的返回false，则终止迭代，返回结果
 * 
 * @param {Array | {} | Map | Set} target object
 * @param {Function} fn 对对象每个元素调用的函数
 * @param {any} accumulator 初始值
 * @returns {any} 构建的最终值
 * 
 * @example
 * 
 * let arr = [0, 1, 2, 3, 4];
 * 
 * console.log( _.reduceRight(arr, (pre, cur) => pre + cur) );  // 10
 * 
 * 
 */
function reduceRight$1(target, fn, accumulator) {
    let type = checkedType$5(target),
        func = null;

    switch (type) {
        case 'Array':
            func = arrayReduceRight;
            break;
        case 'Object':
            func = objectReduceRight;
            break;
        case 'Map':
            func = mapReduceRight;
            break;
        case 'Set':
            func = setReduceRight;
            break;

        default:
            return target;
    }

    return func(target, fn, accumulator);
}


var reduceRight_1 = reduceRight$1;

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

const checkedType$4 = checkedType_1,
        swapElem = _swapElem,
        swapChar = _swapChar;


/**
 * 
 * 
 * @module swapIndex
 * 
 * @description 交换元素位置
 * 
 * 交换数组或字符串元素的位置，对于数组，在数组本身修改，对于字符串，会返回新的字符串
 * 
 * @param {Array | String} target 数组或字符串
 * @param {Number} i 索引
 * @param {Number} j 索引
 * @returns {Array | String}
 * 
 * @example
 * 
 * _.swapIndex([1, 2], 0, 1); // [2, 1]
 * 
 * _.swapIndex('abcd', 0, 3); // dbca
 */
function swapIndex$1 (target, i, j) {
    if (
        isNaN( Number(i) )||
        isNaN( Number(j) )
    ) {
        return target;
    }
    let type = checkedType$4(target),
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

const reduce$1 = reduce_1,
        filter$1 = filter_1,
        map$4 = map_1;

const NO_STRING_ERROR = 'str not is a string';

const isLetter = /[a-zA-Z]/,
        isSpecialChar = /[^a-zA-Z0-9]/,
        isNumber = /[0-9]/;



/**
 * @module camelCase
 * @description 驼峰化字符串
 * 
 * 函数会舍弃字符串的所有特殊字符，无论是在开头还是中间还是结尾，而在非开头处的数字或特殊字符
 * 后的字母会大写
 * 
 * @param {String} str 想要驼峰化的字符串
 * @returns {String} 驼峰化后的字符串
 * 
 * @example
 * 
 * let str1 = '@!$as3gh-at^e123!@#';
 * let str2 = 'a1b2c3';
 * 
 * camelCase(str1); // as3GhAtE123
 * camelCase(str2); // a1B2C3
 * 
 * 
 */
function camelCase$1 (str) {
    if (typeof str !== 'string') {
        throw new Error(NO_STRING_ERROR);
    }

    let arr = filter$1( str.split(isSpecialChar), item => item !== '' );

    arr = map$4(arr, (item, index) =>
        index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    ).join('').split('');

    reduce$1(arr, (pre, cur, index) => {
        if ( isNumber.test(pre) ) {
            if ( isLetter.test(cur) ) {
                arr[index] = cur.toUpperCase();
            }
        }
        return cur;
    });

    return arr.join('');
}


var camelCase_1 = camelCase$1;

const map$3 = map_1;

function toUpperAll (str) {
    return map$3(str, char => char.toUpperCase()).join('');
}



var _toUpperAll = toUpperAll;

const checkedType$3 = checkedType_1,
    upperAll = _toUpperAll,
    forEach$4 = forEach_1;



/**
 * 
 * @module toUpper
 * 
 * @description 将字符串或一个集合中的字符串大写，
 * 
 * 该方法会递归一个集合的所有深度，将集合的所有字符串转化为大写形式
 * 
 * 
 * @param {String | Array | Object | Map} target 想要大写的字符串或集合
 * @returns {String | Array | Object | Map} 转化完成的字符串或集合
 * 
 * @example 
 * 
 * let arr = ['aaa', {name: 'davi'}, 20];
 * 
 * // ['AAA', {name: 'DAVI'}, 20]
 * console.log(_.toUpper(['aaa', { name: 'davi' }, 20]));  
 * 
 */
function toUpper$1(target) {
    let type = checkedType$3(target),
        result = null;

    switch (type) {
        case 'String':
            result = upperAll(target);
            break;
        case 'Array':
            result = forEach$4( target, (item, index) => {
                target[index] = toUpper$1(item);
            } );
            break;
        case 'Object':
            result = forEach$4( target, (value, key) => {
                target[key] = toUpper$1(value);
            } );
            break;
        case 'Map':
            result = forEach$4( target, (value, key) => {
                target.set( key, toUpper$1(value) );
            } );
            break;
        default:
            result = target;
            break;
    }

    return result;
}

var toUpper_1 = toUpper$1;

/**
 * @description 字符串首字母大写
 * @param {String} str string
 * @returns {String}
 */
function toUpperFirst (str) {
    return str[0].toUpperCase() + str.slice(1);
}



var _toUpperFirst = toUpperFirst;

const checkedType$2 = checkedType_1,
    first = _toUpperFirst,
    forEach$3 = forEach_1;

/**
 *
 * @module upperFirst
 *
 * @description 将字符串或一个集合中的字符串首字母大写，
 *
 * 该方法会递归一个集合的所有深度，将集合的所有字符串转化为首字母大写形式
 *
 *
 * @param {String | Array | Object | Map} target 想要首字母大写的字符串或集合
 * @returns {String | Array | Object | Map} 转化完成的字符串或集合
 *
 * @example
 *
 * let arr = ['aaa', {name: 'davi'}, 20];
 *
 * // ['Aaa', {name: 'Davi'}, 20];
 *console.log(_.upperFirst(arr));
 * 
 */
function upperFirst$1(target) {
    let type = checkedType$2(target),
        result = null;

    switch (type) {
        case 'String':
            result = first(target);
            break;
        case 'Array':
            result = forEach$3(target, (item, index) => {
                target[index] = upperFirst$1(item);
            });
            break;
        case 'Object':
            result = forEach$3(target, (value, key) => {
                target[key] = upperFirst$1(value);
            });
            break;
        case 'Map':
            result = forEach$3(target, (value, key) => {
                target.set(key, upperFirst$1(value));
            });
            break;
        default:
            result = target;
            break;
    }

    return result;
}

var upperFirst_1 = upperFirst$1;

const map$2 = map_1;

/**
 * 
 * @description 将字符串的怎么转为小写
 * 
 * @param {String} str str
 * @returns {String}
 */
function _toLower$1 (str) {
    return map$2(str, char => char.toLowerCase()).join('');
}


var _toLower_1 = _toLower$1;

const checkedType$1 = checkedType_1,
    _toLower = _toLower_1,
    forEach$2 = forEach_1;



/**
 * 
 * @module toLower
 * 
 * @description 将一个字符串或集合中的字符串转化为小写形式
 * 
 * 会递归一个集合所有的深度，将它们的字符串值全部转化
 * 
 * 
 * @param {String | Object | Map | Array} target 想要小写的字符串或集合
 * @returns {any}
 * 
 * @example
 * 
 * let arr = ['AAA', ['BBB', ['CCC']]];
 * 
 * //  ['aaa', ['bbb', ['ccc']]];
 * console.log(_.toLower(arr));
 * 
 */
function toLower$1(target) {
    let type = checkedType$1(target),
        result = null;

    switch (type) {
        case 'String':
            result = _toLower(target);
            break;
        case 'Array':
            result = forEach$2(target, (item, index) => {
                target[index] = toLower$1(item);
            });
            break;
        case 'Object':
            result = forEach$2(target, (value, key) => {
                target[key] = toLower$1(value);
            });
            break;
        case 'Map':
            result = forEach$2(target, (value, key) => {
                target.set(key, toLower$1(value));
            });
            break;
        default:
            result = target;
            break;
    }

    return result;
}


var toLower_1 = toLower$1;

/**
 * 删除数组中所有等于item的元素，该方法在原数组修改
 * 
 * @param {Array} arr array
 * @param {any} item item
 * @returns {Array} 修改后的数组
 */
function pullOne$1 (arr, item, i=0) {
    for (; i < arr.length; i++) {
        if ( arr[i] === item ) {
            arr.splice(i, 1);
            pullOne$1(arr, item, i);
            break;
        }
    }
    return arr;
}


var _pullOne = pullOne$1;

const forEach$1 = forEach_1,
        pullOne = _pullOne;


/**
 * 
 * @module pull
 * 
 * @description 移除数组元素
 * 
 * 删除数组中所有与给定值相等的元素，给定值可以有多个，该方法会在原数组修改，
 * 返回修改完成后的数组
 * 
 * @param {Array} arr array
 * @param  {...any} args 想要删除的元素
 * @returns {Array} 修改完成的数组 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4, 3, 2, 6, 1, 2];
 * 
 * _.pull(arr, 1, 2);  //  [3, 4, 3, 6]
 * 
 * 
 */
function pull$2 (arr, ...args) {
    forEach$1(args, argsItem => {
        pullOne(arr, argsItem);
    });
    return arr;
}





var pull_1 = pull$2;

/**
 * @module unique
 * 
 * @description 去重函数
 * 
 * 数组去重，不改变原数组，返回去重后的新数组
 * 
 * @param {Array} arr array
 * @returns {Array} 去重后的数组
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4, 1, 2, 3, 5];
 * 
 * _.unique(arr);  // [1, 2, 3, 4, 5]
 * 
 */
function unique$2 (arr) {
    let cache = [];

    for (const iterate of arr) {
        if ( cache.includes(iterate) ) {
            continue;
        }
        cache.push(iterate);
    }

    return cache;
}


var unique_1 = unique$2;

const pull$1 = pull_1,
        unique$1 = unique_1;



/**
 * 
 * @module remove
 * 
 * @description 删除数组元素
 * 
 * 删除数组中所有对函数返回True的项，返回删除的项，在原数组删除
 * 断言函数接受三个参数，数组当前项的值，索引和数组本身
 * 
 * @param {Array} arr array
 * @param {Function} fn 断言函数，
 * @returns {Array} 函数返回true的项组成的数组
 * 
 * 
 * @example
 * 
 * let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * 
 * _.remove(arr);    //  [ 2, 4, 6, 8, 10 ]
 * 
 * console.log(arr);  //  [ 1, 3, 5, 7, 9 ]
 * 
 */
function remove$1 (arr, fn) {
    let cache = [];

    for (let i = 0; i < arr.length; i++) {
        if ( fn(arr[i], i, arr) ) {
            cache.push( arr[i] );
        }
    }

    pull$1( arr, ...unique$1(cache) );

    return cache;
}



var remove_1 = remove$1;

/**
 * 
 * @param {Number} num number
 * @returns {String}
 */
function toCurrencied$1(num) {
    if (num.length <= 3) {
        return num;
    }
    return (
        toCurrencied$1(num.slice(0, num.length - 3)) +
        ',' +
        num.slice(num.length - 3)
    );
}


var _toCurrencied = toCurrencied$1;

const map$1 = map_1,
        toCurrencied = _toCurrencied;




/**
 * 
 * @module toCurrency
 * 
 * @description 将一个数字转化为以逗号分隔的货币形式的字符串
 * 
 * 
 * @param {Number} num 一个数字
 * @returns {String} 货币形式的字符串
 * 
 * @example
 * 
 * //  123,456,789.123456
 * console.log( toCurrency(123456789.123456) );
 * 
 * 
 */
function toCurrency$1(num) {
    if (isFinite(num)) {
        return map$1(String(num).split('.'), (item, index) =>
            index === 0 ? toCurrencied(item) : '.' + item
        ).join('');
    }
}




var toCurrency_1 = toCurrency$1;

/**
 * 
 * 限定执行器函数只能在num次调用才会执行函数fn
 * 
 * @param {Function} fn func
 * @param {Number} num 次数
 * @returns {Function} 执行器函数
 */
function execBefore(fn, num) {
    function* generateSequence() {
        for (let i = 0; i < num; i++) {
            yield fn();
        }
    }

    let generator = generateSequence();

    return () => {
        generator.next();
    };
}


var _execBefore = execBefore;

/**
 * 
 * 限定执行器函数只要有在执行num次后执行，才会调用函数fn
 * 
 * @param {Function} fn func
 * @param {Number} num 次数
 * @returns {Function} 执行器函数
 */
function execAfter(fn, num) {
    function* generateSequence() {
        for (let i = 0; i < num; i++) {
            yield;
        }
    }

    let generator = generateSequence();

    return () => {
        if (generator.next().done) {
            fn();
        }
    };
}


var _execAfter = execAfter;

const before = _execBefore,
        after = _execAfter;





/**
 * 
 * @module limitExec
 * 
 * @description 限制函数的执行次数
 * 
 * 可选的第三个参数isBefore默认为True，决定函数fn能够执行的次数，
 * 若是isBefore为false，则行为改变为在执行执行器函数执行num次后的执行，才会真正执行函数fn
 * 
 * @param {Function} fn 想要限制执行的函数
 * @param {Number} num 次数
 * @param {Boolean} isBefore 限制执行num次函数fn还是在执行num次后执行函数fn
 * @returns {Function} 执行器函数
 * 
 * 
 * @example
 * 
 * 
 * function before (n) {
    console.log('只有在前四次点击才会执行我');
 *}
 *
 * 
 * let button = document.querySelector('button');
 * 
 * let exec = limitExec(before, 4);
 * 
 * button.addEventListener('click', exec);
 * 
 * 
 * 
 */
function limitExec$1 (fn, num, isBefore=true) {
    let func = null;

    if (isBefore) {
        func = before;
    } else {
        func = after;
    }

    return func( fn, num );
}



var limitExec_1 = limitExec$1;

const checkedType = checkedType_1,
    curry = curry_1,
    deepClone = deepClone_1,
    isInContainer = isInContainer_1,
    debounce = debounce_1,
    throttle = throttle_1,
    random = random_1,
    forEach = forEach_1,
    forEachRight = forEachRight_1,
    filter = filter_1,
    map = map_1,
    find = find_1,
    findRight = findRight_1,
    every = every_1,
    some = some_1,
    reduce = reduce_1,
    reduceRight = reduceRight_1,
    swapIndex = swapIndex_1,
    camelCase = camelCase_1,
    toUpper = toUpper_1,
    upperFirst = upperFirst_1,
    toLower = toLower_1,
    pull = pull_1,
    unique = unique_1,
    remove = remove_1,
    toCurrency = toCurrency_1,
    limitExec = limitExec_1;





export {
    checkedType,
    curry,
    deepClone,
    isInContainer,
    debounce,
    throttle,
    random,
    forEach,
    filter,
    swapIndex,
    reduce,
    map,
    camelCase,
    toUpper,
    pull,
    unique,
    remove,
    find,
    findRight,
    every,
    some,
    reduceRight,
    toCurrency,
    limitExec,
    forEachRight,
    upperFirst,
    toLower,
};

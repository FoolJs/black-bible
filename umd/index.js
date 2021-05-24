(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global._ = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	/**
	 * @module checkedType
	 * 
	 * @description 判断类型的函数
	 * 
	 * 该函数通过Object.prototype.toString方法来判断，所以
	 * 若是重写了该方法，函数可能会失效，函数会返回对应类型的大写形式，
	 * 
	 * 
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
	function checkedType$i(target) {
	    return Object.prototype.toString.call(target).slice(8, -1);
	}





	var checkedType_1 = checkedType$i;

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

	/**
	 * 
	 * @module isObjectLike
	 * 
	 * @description 检查是否是类对象
	 * 
	 * 跟isObject基本相同，只是会对函数返回false，也就是说对
	 * 一个非null非function对象返回True
	 * 
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 * 
	 * @example
	 * 
	 * // false
	 * _.isObjectLike(function f () {})
	 * 
	 */
	function isObjectLike$g (value) {
	    const type = typeof value;
	    return value !== null && type === 'object';
	}



	var isObjectLike_1 = isObjectLike$g;

	const checkedType$h = checkedType_1,
	        isObjectLike$f = isObjectLike_1;


	/**
	 * @module isArray
	 * 
	 * @description 是否是数组类型
	 * 
	 * 使用Array的isArray方法来进行检查
	 * 
	 * @param {any} value 要检查的值
	 * 
	 * @example
	 * 
	 * 
	 * // true
	 * _.isArray([]);
	 * 
	 * 
	 * 
	 */
	function isArray$k (value) {
	    return Array.isArray(value) ||
	            (isObjectLike$f(value) && checkedType$h(value) === 'Array');
	}



	var isArray_1 = isArray$k;

	const checkedType$g = checkedType_1,
	        isObjectLike$e = isObjectLike_1;

	/**
	 * 
	 * @module isWindow
	 * 
	 * @description 检查当前宿主环境是否为window
	 * 
	 * @returns {Boolean}
	 * 
	 * 
	 */
	function isWindow$3 () {
	    if ( typeof window !== 'object' ) {
	        return false;
	    }

	    if (globalThis) {
	        return globalThis === window;
	    }

	    return isObjectLike$e(window) && checkedType$g(window) === 'Window';
	}




	var isWindow_1 = isWindow$3;

	const isWindow$2 = isWindow_1,
	    checkedType$f = checkedType_1,
	    isObjectLike$d = isObjectLike_1;


	/**
	 * 
	 * @module isNodeEnv
	 * 
	 * @description 是否是Node环境
	 * 
	 * 
	 * 
	 * @returns {Boolean}
	 */
	function isNodeEnv$9 () {
	    if (isWindow$2()) {
	        return false;
	    }
	    if (globalThis) {
	        return isObjectLike$d(globalThis) && checkedType$f(globalThis) === 'global';
	    }
	    return isObjectLike$d(commonjsGlobal) && checkedType$f(commonjsGlobal) === 'global';
	}

	var isNodeEnv_1 = isNodeEnv$9;

	const isNodeEnv$8 = isNodeEnv_1;

	try {
	    const util = isNodeEnv$8() ? require('util').types : {};
	} catch (error) {}




	function f() {
	    try {
	            return isNodeEnv$8() ? require('util').types : {};
	    } catch (error) {}
	}

	const util$1 = f();


	var _nodeUtil = util$1;

	const checkedType$e = checkedType_1,
	        isNodeEnv$7 = isNodeEnv_1,
	        isObjectLike$c = isObjectLike_1,
	        nodeUtil$4= _nodeUtil;

	/**
	 * 
	 * @module isMap
	 * 
	 * @description 检查值是否为Map
	 * 
	 * @param {*} value 需要检查的值
	 * @returns {Boolean}
	 * 
	 * @example
	 * 
	 * // true
	 * console.log(_.isMap(new Map()))
	 * 
	 */
	function isMap$j (value) {
	    return isNodeEnv$7() ?
	            nodeUtil$4.isMap(value) :
	            isObjectLike$c(value) && checkedType$e(value) === 'Map';
	}




	var isMap_1 = isMap$j;

	const checkedType$d = checkedType_1,
	    isNodeEnv$6 = isNodeEnv_1,
	    isObjectLike$b = isObjectLike_1,
	    nodeUtil$3 = _nodeUtil;


	/**
	 * 
	 * @module isSet
	 * 
	 * @description 是否是Set
	 * 
	 * @param {*} value 需要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * console.log(_.isSet(new Set()))
	 * 
	 */
	function isSet$g(value) {
	    return isNodeEnv$6() ?
	            nodeUtil$3.isSet(value) :
	            isObjectLike$b(value) && checkedType$d(value) === 'Set';
	}

	var isSet_1 = isSet$g;

	const checkedType$c = checkedType_1;
	const isObjectLike$a = isObjectLike_1;


	/**
	 * 
	 * @module isPlainObject
	 * 
	 * @description 检查值是否为普通对象
	 * 
	 * 一个普通对象为直接通过Object构造函数或对象字面量创建的对象,
	 * 一个对象若是继承了其他对象也算是普通对象
	 * 
	 * @param {*} value 需要检查的值
	 * @returns {Boolean}
	 * 
	 * let o1 = {},
	 *      o2 = {};
	 * 
	 * Object.setPrototypeOf(o1, o2);
	 * 
	 * 
	 * // true
	 * console.log(_.isPlainObject(o1))
	 * 
	 * 
	 * // true
	 * console.log(_.isPlainObject(o2))
	 * 
	 */
	function isPlainObject$j (value) {
	    if (!isObjectLike$a(value)) {
	        return false;
	    }

	    return checkedType$c(value) === 'Object';
	}


	var isPlainObject_1 = isPlainObject$j;

	const checkedType$b = checkedType_1,
	    isObjectLike$9 = isObjectLike_1;



	/**
	 * 
	 * @module isNumber
	 * 
	 * @description 检查是否是数字
	 * 
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * _.isNumber(new Number(100));
	 * 
	 * // true
	 * _.isNumber(100);
	 * 
	 */
	function isNumber$6 (value) {
	    return typeof value === 'number' || 
	        ( isObjectLike$9(value) && checkedType$b(value) === 'Number' );
	}


	var isNumber_1 = isNumber$6;

	const checkedType$a = checkedType_1,
	    isObjectLike$8 = isObjectLike_1;



	/**
	 * 
	 * @module isString
	 * 
	 * @description 检查是否是字符串
	 * 
	 * 
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * _.isString('aaa')
	 * 
	 * // true
	 * _.isString(new String())
	 * 
	 */
	function isString$d(value) {
	    return (
	        typeof value === 'string' ||
	        (isObjectLike$8(value) && checkedType$a(value) === 'String')
	    );
	}



	var isString_1 = isString$d;

	const arrayForEach = _arrayforEach,
	    objectForEach = _objectForEach,
	    mapForEach = _mapForEach,
	    setForEach = _setForEach,
	    numberForEach = _numberForEach,
	    stringForEach = _stringForEach,
	    isArray$j = isArray_1,
	    isMap$i = isMap_1,
	    isSet$f = isSet_1,
	    isPlainObject$i = isPlainObject_1,
	    isNumber$5 = isNumber_1,
	    isString$c = isString_1;

	/**
	 *
	 * @module forEach
	 *
	 * @description forEach迭代函数
	 *
	 * 适用于各种类型的forEach，对集合的每一项运行函数，最终返回集合本身，
	 * 可以显式的通过返回false来终止循环
	 *
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
	function forEach$8(target, cb) {
	    let func = null;

	    if (isArray$j(target)) {
	        func = arrayForEach;
	    } else if (isPlainObject$i(target)) {
	        func = objectForEach;
	    } else if (isMap$i(target)) {
	        func = mapForEach;
	    } else if (isSet$f(target)) {
	        func = setForEach;
	    } else if (isNumber$5(target)) {
	        func = numberForEach;
	    } else if (isString$c(target)) {
	        func = stringForEach;
	    } else {
	        return target;
	    }

	    return func(target, cb);
	}

	var forEach_1 = forEach$8;

	const forEach$7 = forEach_1;

	/**
	 *
	 * @module curry
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
	        forEach$7(args2, item => {
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

	/**
	 * 
	 * @module isObject
	 * 
	 * @description 检查是否是对象类型
	 * 
	 * 对于任何对象类型包括函数返回True，对于null返回false和undefined返回false
	 * 
	 * @param {any} value 想要检查的值
	 * @returns {Boolean} 
	 * 
	 * @example
	 * 
	 * // true
	 * _.isObject([])
	 * 
	 * // false
	 * _.isObject(null)
	 * 
	 * // false
	 * _.isObject(undefined)
	 * 
	 */
	function isObject$3 (value) {
	    const type = typeof value;

	    return value !== null && (type === 'function' || type === 'object');
	}


	var isObject_1 = isObject$3;

	const checkedType$9 = checkedType_1,
	        isObjectLike$7 = isObjectLike_1,
	        isNodeEnv$5 = isNodeEnv_1,
	        nodeUtil$2 = _nodeUtil;



	/**
	 * 
	 * @module isDate
	 * 
	 * @description 值是否是Date
	 * 
	 * 
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 */
	function isDate$2 (value) {
	    if (isNodeEnv$5()) {
	        return nodeUtil$2.isDate(value);
	    }
	    return isObjectLike$7(value) && checkedType$9(value) === 'Date';
	}



	var isDate_1 = isDate$2;

	const checkedType$8 = checkedType_1;
	const isNodeEnv$4 = isNodeEnv_1;
	const isObjectLike$6 = isObjectLike_1;
	const util = _nodeUtil;


	/**
	 * 
	 * @module isRegExp
	 * 
	 * @description 是否是RegExp
	 * 
	 * 
	 * 
	 * @param {*} value 检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * console.log(_.isRegExp(new RegExp()))
	 * 
	 */
	function isRegExp$2 (value) {
	    if (isNodeEnv$4()) {
	        return util.isRegExp(value);
	    }
	    return isObjectLike$6(value) && checkedType$8(value) === 'RegExp';
	}



	var isRegExp_1 = isRegExp$2;

	const forEach$6 = forEach_1,
	    isObject$2 = isObject_1,
	    isDate$1 = isDate_1,
	    isArray$i = isArray_1,
	    isMap$h = isMap_1,
	    isSet$e = isSet_1,
	    isPlainObject$h = isPlainObject_1,
	    isRegExp$1 = isRegExp_1;



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
	    let result = null;

	    if ( !isObject$2(target) ) {
	        return target;
	    }
	    if (isDate$1(target)) {
	        return new Date(target);
	    }
	    if (isRegExp$1(target)) {
	        return new RegExp(target);
	    }
	    if ( cache.has(target) ) {
	        return cache.get(target);
	    }
	    if (isArray$i(target)) {
	        result = [];

	        cache.set(target, result);

	        forEach$6(target, element => {
	            result.push( deepClone$1(element, cloneProto, cache) );
	        });

	        return result;
	    }
	    if (isMap$h(target)) {
	        result = new Map();

	        cache.set(target, result);

	        forEach$6(target, (value, key) => {
	            result.set(
	                deepClone$1(key, cloneProto, cache),
	                deepClone$1(value, cloneProto, cache)
	            );
	        });

	        return result;
	    }
	    if (isSet$e(target)) {
	        result = new Set();

	        cache.set(target, result);

	        forEach$6(target, value => {
	            result.add( deepClone$1(value, cloneProto, cache) );
	        });

	        return result;
	    }
	    if (isPlainObject$h(value)) {
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
	        
	        forEach$6(symbolProps, prop => {
	            props.push(prop);
	        });

	        forEach$6(props, prop => {
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
	function random$4(min,max, floating=false) {
	    if (floating) {
	        return min + Math.random() * (max - min);
	    }
	    return Math.floor(min + Math.random() * (max - min + 1));
	}





	var random_1 = random$4;

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

	const arrayForEachRight = _arrayForEachRight,
	    objectForEachRight = _objectForEachRight,
	    mapForEachRight = _mapForEachRight,
	    setForEachRight = _setForEachRight,
	    isArray$h = isArray_1,
	    isMap$g = isMap_1,
	    isSet$d = isSet_1,
	    isPlainObject$g = isPlainObject_1;

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
	function forEachRight$1(target, fn) {
	    let func = null;

	    if (isArray$h(target)) {
	        func = arrayForEachRight;
	    } else if (isPlainObject$g(target)) {
	        func = objectForEachRight;
	    } else if (isMap$g(target)) {
	        func = mapForEachRight;
	    } else if (isSet$d(target)) {
	        func = setForEachRight;
	    } else {
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

	const arrayFilter = _arrayFilter,
	    objectFilter = _objectFilter,
	    mapFilter = _mapFilter,
	    setFilter = _setFilter,
	    stringFilter$1 = _stringFilter,
	    numberFilter = _numberFilter,
	    isArray$g = isArray_1,
	    isMap$f = isMap_1,
	    isSet$c = isSet_1,
	    isPlainObject$f = isPlainObject_1,
	    isNumber$4 = isNumber_1,
	    isString$b = isString_1;

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
	function filter$3(target, cb) {
	    let func = null;

	    if (isArray$g(target)) {
	        func = arrayFilter;
	    } else if (isPlainObject$f(target)) {
	        func = objectFilter;
	    } else if (isMap$f(target)) {
	        func = mapFilter;
	    } else if (isSet$c(target)) {
	        func = setFilter;
	    } else if (isNumber$4(target)) {
	        func = numberFilter;
	    } else if (isString$b(target)) {
	        func = stringFilter$1;
	    } else {
	        return target;
	    }

	    return func(target, cb);
	}

	var filter_1 = filter$3;

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

	const arrayMap = _arrayMap,
	    objectMap = _objectMap,
	    mapMap = _mapMap,
	    setMap = _setMap,
	    stringMap = _stringMap,
	    numberMap = _numberMap,
	    isArray$f = isArray_1,
	    isMap$e = isMap_1,
	    isSet$b = isSet_1,
	    isPlainObject$e = isPlainObject_1,
	    isNumber$3 = isNumber_1,
	    isString$a = isString_1;

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
	function map$5(target, fn) {
	    let func = null;

	    if (isArray$f(target)) {
	        func = arrayMap;
	    } else if (isPlainObject$e(target)) {
	        func = objectMap;
	    } else if (isMap$e(target)) {
	        func = mapMap;
	    } else if (isSet$b(target)) {
	        func = setMap;
	    } else if (isString$a(target)) {
	        func = stringMap;
	    } else if (isNumber$3(target)) {
	        func = numberMap;
	    } else {
	        return target;
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

	const arrayFind = _arrayFind,
	    objectFind = _objectFind,
	    mapFind = _mapFind,
	    setFind = _setFind,
	    isArray$e = isArray_1,
	    isMap$d = isMap_1,
	    isSet$a = isSet_1,
	    isPlainObject$d = isPlainObject_1;

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
	function find$1(target, predicate, fromIndex = 0) {
	    let func = null;

	    if (isArray$e(target)) {
	        func = arrayFind;
	    } else if (isPlainObject$d(target)) {
	        func = objectFind;
	    } else if (isMap$d(target)) {
	        func = mapFind;
	    } else if (isSet$a(target)) {
	        func = setFind;
	    } else {
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

	const arrayFindRight = _arrayFindRight,
	    objectFindRight = _objectFindRight,
	    mapFindRight = _mapFindRight,
	    setFindRight = _setFindRight,
	    isArray$d = isArray_1,
	    isMap$c = isMap_1,
	    isSet$9 = isSet_1,
	    isPlainObject$c = isPlainObject_1;

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
	    let func = null;

	    if (isArray$d(target)) {
	        func = arrayFindRight;
	    } else if (isPlainObject$c(target)) {
	        func = objectFindRight;
	    } else if (isMap$c(target)) {
	        func = mapFindRight;
	    } else if (isSet$9(target)) {
	        func = setFindRight;
	    } else {
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

	const arrayEvery = _arrayEvery,
	        objectEvery = _objectEvery,
	        mapEvery = _mapEvery,
	        setEvery = _setEvery,
	    isArray$c = isArray_1,
	    isMap$b = isMap_1,
	    isSet$8 = isSet_1,
	    isPlainObject$b = isPlainObject_1;

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
	    let func = null;

	    if (isArray$c(target)) {
	        func = arrayEvery;
	    } else if ( isPlainObject$b(target) ) {
	        func = objectEvery;
	    } else if ( isMap$b(target) ) {
	        fnc = mapEvery;
	    } else if ( isSet$8(target) ) {
	        func = setEvery;
	    } else {
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

	const arraySome = _arraySome,
	    objectSome = _objectSome,
	    mapSome = _mapSome,
	    setSome = _setSome,
	    isArray$b = isArray_1,
	    isMap$a = isMap_1,
	    isSet$7 = isSet_1,
	    isPlainObject$a = isPlainObject_1;

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
	function some$1(target, predicate) {
	    let func = null;

	    if (isArray$b(target)) {
	        func = arraySome;
	    } else if (isPlainObject$a(target)) {
	        func = objectSome;
	    } else if (isMap$a(target)) {
	        func = mapSome;
	    } else if (isSet$7(target)) {
	        func = setSome;
	    } else {
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

	const arrayReduce = _arrayReduce,
	    objectReduce = _objectReduce,
	    stringReduce = _stringReduce,
	    mapReduce = _mapReduce,
	    setReduce = _setReduce,
	    isArray$a = isArray_1,
	    isMap$9 = isMap_1,
	    isSet$6 = isSet_1,
	    isPlainObject$9 = isPlainObject_1,
	    isString$9 = isString_1;

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
	    let func = null;

	    if (isArray$a(target)) {
	        func = arrayReduce;
	    } else if (isPlainObject$9(target)) {
	        func = objectReduce;
	    } else if (isString$9(target)) {
	        func = stringReduce;
	    } else if (isMap$9(target)) {
	        func = mapReduce;
	    } else if (isSet$6(target)) {
	        func = setReduce;
	    } else {
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

	const arrayReduceRight = _arrayReduceRight,
	    mapReduceRight = _mapReduceRight,
	    objectReduceRight = _objectReduceRight,
	    setReduceRight = _setReduceRight,
	    isArray$9 = isArray_1,
	    isMap$8 = isMap_1,
	    isSet$5 = isSet_1,
	    isPlainObject$8 = isPlainObject_1;

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
	    let func = null;

	    if (isArray$9(target)) {
	        func = arrayReduceRight;
	    } else if (isPlainObject$8(target)) {
	        func = objectReduceRight;
	    } else if (isMap$8(target)) {
	        func = mapReduceRight;
	    } else if (isSet$5(target)) {
	        func = setReduceRight;
	    } else {
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

	/**
	 * 
	 * @module isNaN
	 * 
	 * @description 检查是否是NaN
	 * 
	 * 与Javascript自带的isNaN不同，该函数只会对NaN值返回true
	 * 
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * _.isNaN(NaN);
	 * 
	 * // false
	 * _.isNaN('AAA');
	 * 
	 */
	function isNaN$2 (value) {
	    return value !== value;
	}


	var _isNaN = isNaN$2;

	const swapElem = _swapElem,
	    swapChar = _swapChar,
	    isArray$8 = isArray_1,
	    isString$8 = isString_1,
	    isNaN$1 = _isNaN;

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
	function swapIndex$1(target, i, j) {
	    if (isNaN$1(Number(i)) || isNaN$1(Number(j))) {
	        return target;
	    }
	    let func = null;

	    if (isArray$8(target)) {
	        func = swapElem;
	    } else if (isString$8(target)) {
	        func = swapChar;
	    } else {
	        return target;
	    }

	    return func(target, i, j);
	}

	var swapIndex_1 = swapIndex$1;

	const reduce$1 = reduce_1,
	        filter$2 = filter_1,
	        map$4 = map_1;

	const NO_STRING_ERROR = 'str not is a string';

	const isLetter = /[a-zA-Z]/,
	        isSpecialChar = /[^a-zA-Z0-9]/,
	        isNumber$2 = /[0-9]/;



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

	    let arr = filter$2( str.split(isSpecialChar), item => item !== '' );

	    arr = map$4(arr, (item, index) =>
	        index === 0 ? item : item[0].toUpperCase() + item.slice(1)
	    ).join('').split('');

	    reduce$1(arr, (pre, cur, index) => {
	        if ( isNumber$2.test(pre) ) {
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

	const upperAll = _toUpperAll,
	    forEach$5 = forEach_1,
	    isArray$7 = isArray_1,
	    isMap$7 = isMap_1,
	    isPlainObject$7 = isPlainObject_1,
	    isString$7 = isString_1;

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
	    let result = null;

	    if (isString$7(target)) {
	        result = upperAll(target);
	    } else if (isArray$7(target)) {
	        result = forEach$5(target, (item, index) => {
	            target[index] = toUpper$1(item);
	        });
	    } else if (isPlainObject$7(target)) {
	        result = forEach$5(target, (value, key) => {
	            target[key] = toUpper$1(value);
	        });
	    } else if (isMap$7(target)) {
	        result = forEach$5(target, (value, key) => {
	            target.set(key, toUpper$1(value));
	        });
	    } else {
	        result = target;
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

	const first = _toUpperFirst,
	    forEach$4 = forEach_1,
	    isArray$6 = isArray_1,
	    isMap$6 = isMap_1,
	    isPlainObject$6 = isPlainObject_1,
	    isString$6 = isString_1;

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
	    let result = null;

	    if (isString$6(target)) {
	        result = first(target);
	    } else if (isArray$6(target)) {
	        result = forEach$4(target, (item, index) => {
	            target[index] = upperFirst$1(item);
	        });
	    } else if (isPlainObject$6(target)) {
	        result = forEach$4(target, (value, key) => {
	            target[key] = upperFirst$1(value);
	        });
	    } else if (isMap$6(target)) {
	        result = forEach$4(target, (value, key) => {
	            target.set(key, upperFirst$1(value));
	        });
	    } else {
	        result = target;
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

	const _toLower = _toLower_1,
	    forEach$3 = forEach_1,
	    isArray$5 = isArray_1,
	    isMap$5 = isMap_1,
	    isPlainObject$5 = isPlainObject_1,
	    isString$5 = isString_1;

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
	    let result = null;

	    if (isString$5(target)) {
	        result = _toLower(target);
	    } else if (isArray$5(target)) {
	        result = forEach$3(target, (item, index) => {
	            target[index] = toLower$1(item);
	        });
	    } else if (isPlainObject$5(target)) {
	        result = forEach$3(target, (value, key) => {
	            target[key] = toLower$1(value);
	        });
	    } else if (isMap$5(target)) {
	        result = forEach$3(target, (value, key) => {
	            target.set(key, toLower$1(value));
	        });
	    } else {
	        result = target;
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

	const forEach$2 = forEach_1,
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
	    forEach$2(args, argsItem => {
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
	 * @module compact
	 * 
	 * @description 获取真值数组
	 * 
	 * 返回一个新数组，包含原数组只呢个的所有真值，
	 * 假值为：undefined, NaN, 0, false, null
	 * 
	 * 
	 * 
	 * @param {Array} arr array
	 * @returns {Array} 数组中的真值元素组成的数组
	 * 
	 * 
	 * @example
	 * 
	 * let arr = [0, 1, false, 2, null, '', 3, NaN, 4, undefined, 5];
	 * 
	 * // [1, 2, 3, 4, 5];
	 * console.log( _.compact(arr) );
	 * 
	 */

	function compact$1 (arr) {
	    let cache = [];

	    for (const iterate of arr) {
	        if (iterate) {
	            cache.push(iterate);
	        }
	    }

	    return cache;
	}



	var compact_1 = compact$1;

	const filter$1 = filter_1;



	/**
	 * 
	 * @module withOut
	 * 
	 * @description 移除所有等于calue的值
	 * 
	 * 返回一个新数组，其中包含所有不等于value的值
	 * 
	 * @param {Array} arr array
	 * @param  {...any} values 想要移除的值
	 * @returns {Array}
	 * 
	 * @example
	 * 
	 * 
	 * let arr = [1, 1, 0, 2, 3 ,4 ,5 ,3, 6];
	 * 
	 * // [0, 2, 4, 5, 6]
	 * console.log( _.withOut(arr, 1, 3) );
	 * 
	 */
	function withOut$1 (arr, ...values) {
	    return filter$1(arr, item => !values.includes(item));
	}


	var withOut_1 = withOut$1;

	const random$3 = random_1;

	/**
	 * 
	 * @param {Array} arr array
	 * @returns {any}
	 */
	function arraySample$1 (arr) {
	    let len = arr.length;

	    if (len === 0) {
	        return undefined;
	    } else if (len === 1) {
	        return arr[0];
	    } else {
	        return arr[ random$3(0, len - 1) ];
	    }
	}


	var _arraySample = arraySample$1;

	const arraySample = _arraySample,
	    isArray$4 = isArray_1,
	    isMap$4 = isMap_1,
	    isSet$4 = isSet_1,
	    isPlainObject$4 = isPlainObject_1,
	    isString$4 = isString_1;

	/**
	 *
	 * @module sample
	 *
	 * @description 随机获取集合的某一项的值
	 *
	 * 随机获取集合的某一项，对于Object和Map类型来说，获取得将会是他们的
	 * Key，而不是Value
	 *
	 * @param {Array | Object | Map | Set | String} target 一个集合
	 * @returns {any} 集合的某一项
	 *
	 * @example
	 *
	 * let arr = [1, 2, 3, 4];
	 *
	 * // 3, 2, 2, 3, 3, 1, 2, 4, 4, 1
	 *
	 * _.forEach(10, () => {
	 *      console.log( _.sample(arr) )
	 * })
	 *
	 */

	function sample$1(target) {
	    let cache = null;

	    if (isArray$4(target) || isString$4(target)) {
	        cache = target;
	    } else if (isPlainObject$4(target)) {
	        cache = Object.keys(target);
	    } else if (isMap$4(target) || isSet$4(target)) {
	        cache = Array.from(target.keys());
	    } else {
	        return target;
	    }

	    return arraySample(cache);
	}

	var sample_1 = sample$1;

	const random$2 = random_1,
	    isArray$3 = isArray_1,
	    isMap$3 = isMap_1,
	    isSet$3 = isSet_1,
	    isPlainObject$3 = isPlainObject_1,
	    isString$3 = isString_1;

	/**
	 *
	 * @module sampleSize
	 *
	 * @description 随机抽取一个集合的num个元素
	 *
	 * 随机抽取一个集合的num个元素，适用于多种类型，若是num大于集合内元素的数量，会随机抽取
	 * 集合所有的元素，会将抽取到的元素放到一个数组内，
	 *
	 * @param {Array | Map | Set | Object | String} target 想要随机抽取的对象
	 * @param {Number} num 想要获得的元素数量
	 * @returns {Array} 抽取的元素组成的数组
	 *
	 *
	 * @example
	 *
	 * let arr = [1, 2, 3, 4];
	 *
	 * // [3, 1]
	 * console.log(_.sampleSize(arr, 2));
	 *
	 * // [2, 4, 3, 1]
	 * console.log(_.sampleSize(arr, 100));
	 *
	 */
	function sampleSize$1(target, num) {
	    let cache = null;

	    if (isArray$3(target)) {
	        cache = target.slice();
	    } else if (isPlainObject$3(target)) {
	        cache = Object.keys(target);
	    } else if (isMap$3(target) || isSet$3(target)) {
	        cache = Array.from(target.keys());
	    } else if (isString$3(target)) {
	        cache = target.split('');
	    } else {
	        return target;
	    }

	    num = num > cache.length ? cache.length : num;

	    let result = [];

	    for (let i = 0; i < num; i++) {
	        let index = random$2(0, cache.length - 1),
	            value = cache[index];
	        result.push(value);
	        cache.splice(index, 1);
	    }

	    return result;
	}

	var sampleSize_1 = sampleSize$1;

	const isArray$2 = isArray_1,
	    isMap$2 = isMap_1,
	    isSet$2 = isSet_1,
	    isPlainObject$2 = isPlainObject_1,
	    isString$2 = isString_1;

	/**
	 *
	 * @module size
	 *
	 * @description 一个集合内元素的数量
	 *
	 * 对于数组和字符串，为他们的length属性，其他类型的对象，为对象内所有
	 * 的可迭代属性的数量
	 *
	 * @param {Array | String | Object | Map | Set} target 一个集合
	 * @returns {Number} 集合内元素的数量
	 *
	 * @example
	 *
	 * let o = {name: 'Davi', age: 22};
	 *
	 * // 2
	 * console.log(_.size(o));
	 *
	 */
	function size$1(target) {
	    let len = 0;

	    if (isArray$2(target) || isString$2(target)) {
	        len = target.length;
	    } else if (isPlainObject$2(target)) {
	        len = Object.keys(target).length;
	    } else if (isMap$2(target) || isSet$2(target)) {
	        len = Array.from(target.keys()).length;
	    } else {
	        return target;
	    }

	    return len;
	}

	var size_1 = size$1;

	const forEach$1 = forEach_1,
	    random$1 = random_1,
	    isArray$1 = isArray_1,
	    isMap$1 = isMap_1,
	    isSet$1 = isSet_1,
	    isPlainObject$1 = isPlainObject_1,
	    isString$1 = isString_1;

	/**
	 *
	 * @module shuffle
	 *
	 * @description 打乱集合的顺序
	 *
	 * 打乱一个集合的顺序，不会改变原集合，而是返回一个新集合，
	 *
	 * @param {Array | Object | Map | Set | String} target 想要打乱顺序的集合
	 * @returns {Array | Object | Map | Set | String} 打乱顺序后的集合
	 *
	 *
	 * @example
	 *
	 * let arr = [1, 2, 3, 4];
	 *
	 * // [2, 4, 3, 1]
	 * console.log(_.shuffle(arr));
	 *
	 * let str = 'ABCD';
	 *
	 * // 'ADBC';
	 * console.log(_.shuffle(str));
	 *
	 */
	function shuffle$1(target) {
	    let cache = null,
	        result = null,
	        len = 0;

	    if (isArray$1(target)) {
	        result = [];
	        cache = target.slice();
	        len = cache.length;

	        forEach$1(len, () => {
	            let i = random$1(0, len - 1);
	            result.push(cache[i]);
	            cache.splice(i, 1);
	            len--;
	        });
	    } else if (isPlainObject$1(target)) {
	        result = {};
	        cache = Object.keys(target);
	        len = cache.length;

	        forEach$1(len, () => {
	            let i = random$1(0, len - 1),
	                key = cache[i],
	                value = target[key];

	            result[key] = value;
	            cache.splice(i, 1);
	            len--;
	        });
	    } else if (isMap$1(target)) {
	        result = new Map();
	        cache = Array.from(target.keys());
	        len = cache.length;

	        forEach$1(len, () => {
	            let i = random$1(0, len - 1),
	                key = cache[i],
	                value = target.get(key);

	            result.set(key, value);
	            cache.splice(i, 1);
	            len--;
	        });
	    } else if (isSet$1(target)) {
	        result = new Set();
	        cache = Array.from(target.keys());
	        len = cache.length;

	        forEach$1(len, () => {
	            let i = random$1(0, len - 1),
	                value = cache[i];

	            result.add(value);
	            cache.splice(i, 1);
	            len--;
	        });
	    } else if (isString$1(target)) {
	        result = '';
	        cache = target.split('');
	        len = cache.length;

	        forEach$1(len, () => {
	            let i = random$1(0, len - 1),
	                value = cache[i];

	            result += value;
	            cache.splice(i, 1);
	            len--;
	        });
	    } else {
	        return target;
	    }

	    return result;
	}

	var shuffle_1 = shuffle$1;

	/**
	 * 
	 * @module before
	 * 
	 * @description 限制函数执行的次数
	 * 
	 * 限制函数只能执行多少次，返回一个执行器函数，用来执行函数，次数到之后，再次执行函数
	 * 会失效，
	 * 
	 * 
	 * @param {Function} fn 想要限制执行次数的函数
	 * @param {Number} count 执行次数
	 * @param {any}  [point=globalThis] 函数运行时所在环境，默认为globalThis
	 * @returns {Function}  执行器函数
	 * 
	 * 
	 * @example
	 * 
	 * function before (n) {
	    console.log('只有在前四次点击才会执行我');
	 *}
	 *
	 * 
	 * let button = document.querySelector('button');
	 * 
	 * let exec = _.before(before, 4);
	 * 
	 * button.addEventListener('click', exec);
	 * 
	 */
	function before$1 (fn, count, point=globalThis) {
	    function* generateSequence() {
	        for (let i = 0; i < count; i++) {
	            yield fn.call(point);
	        }
	    }

	    let generator = generateSequence();

	    return () => {
	        generator.next();
	    };
	}


	var before_1 = before$1;

	/**
	 * 
	 * @module after
	 * 
	 * @description 函数在count次后执行
	 * 
	 * 限制函数在触发多少次后执行
	 * 
	 * @param {Function} fn 想要限制执行的函数
	 * @param {Number} count 次数
	 * @param {any} [point=globalThis] 函数执行时环境，默认为globalThis
	 * @returns {Function} 执行器函数
	 * 
	 * @example
	 * 
	 * function after (n) {
	    console.log('只有在点击四次后才会执行我');
	 *}
	 *
	 * 
	 * let button = document.querySelector('button');
	 * 
	 * let exec = _.after(after, 4);
	 * 
	 * button.addEventListener('click', exec);
	 * 
	 */
	function after$1 (fn, count, point=globalThis) {
	    function* generateSequence() {
	        for (let i = 0; i < count; i++) {
	            yield;
	        }
	    }

	    let generator = generateSequence();

	    return () => {
	        if (generator.next().done) {
	            fn.call(point);
	        }
	    };
	}


	var after_1 = after$1;

	/**
	 * 
	 * @module delay
	 * 
	 * @description 延时函数
	 * 
	 * 延时函数fn的执行wait毫秒，会返回一个定时器ID
	 * 
	 * @param {Function} fn 想要延时的函数
	 * @param {Number} wait 延时
	 * @param {Array} args 函数fn需要的参数，需要放到一个数组里面
	 * @param {any} [point=globalThis] 函数fn执行时环境，默认为globalThis
	 * @returns {Object} 定时器ID
	 * 
	 * 
	 * @example
	 * 
	 * let obj = {
	 *      name: 'Sun XiaoChuan',
	 *      age: 6,
	 *      introduction() {
	 *      console.log(`My name is ${this.name} I'm ${this.age} years old`)
	 *      }
	 * }
	 * 
	 * // My name is sun Xiaochuan. I'm 6 years old
	 * let timerId = delay(obj.introduction, 1000, [], obj);
	 * 
	 */
	function delay$1 (fn, wait, args, point=globalThis) {
	    return setTimeout(() => {
	        fn.apply(point, args);
	    }, wait);
	}


	var delay_1 = delay$1;

	const checkedType$7 = checkedType_1;

	/**
	 * 
	 * @module isBoolean
	 * 
	 * @description 检查是否是布尔值
	 * 
	 * 
	 * 
	 * @param {*} value 需要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * _.isBoolean(true)
	 * 
	 * 
	 * // true
	 * _.isBoolean(false)
	 * 
	 */
	function isBoolean$1 (value) {
	    return (typeof value === 'boolean') || (checkedType$7(value) === 'Boolean');
	}


	var isBoolean_1 = isBoolean$1;

	const checkedType$6 = checkedType_1,
	        isObjectLike$5 = isObjectLike_1;



	/**
	 * 
	 * @module isSymbol
	 * 
	 * @description 检查值是否是Symbol
	 * 
	 * 
	 * @param {*} value 需要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * console.log(_.isSymbol( Symbol("foo")))
	 * 
	 * // true
	 * console.log(_.isSymbol(Object(Symbol("foo"))))
	 * 
	 */
	function isSymbol$1 (value) {
	    return (typeof value === 'symbol') ||
	            ( isObjectLike$5(value) && checkedType$6(value) === 'Symbol' );
	}




	var isSymbol_1 = isSymbol$1;

	/**
	 * 
	 * @module isUndefined
	 * 
	 * @description 检查值是否是Undefined
	 * 
	 * 
	 * 
	 * 
	 * @param {*} value 需要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * 
	 * // true
	 * console.log( _.isUndefined(Undefined) );
	 * 
	 * 
	 */
	function isUndefined$3 (value) {
	    return typeof value === 'undefined';
	}


	var isUndefined_1 = isUndefined$3;

	/**
	 * 
	 * 
	 * @module isNull
	 * 
	 * @description 检查值是否等于Null
	 * 
	 * 
	 * @param {*} value 需要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * console.log(_.isNull(null));
	 * 
	 */
	function isNull$3 (value) {
	    return value === null;
	}


	var isNull_1 = isNull$3;

	const isWindow$1 = isWindow_1,
	        isNodeEnv$3 = isNodeEnv_1;

	function root$1 () {
	    if (globalThis) {
	        return globalThis;
	    }
	    if ( isWindow$1() ) {
	        return window;
	    }
	    if ( isNodeEnv$3() ) {
	        return commonjsGlobal;
	    }
	}


	var _root = root$1();

	const root = _root;


	var _nativeIsFinite = root.isFinite;

	const isNumber$1 = isNumber_1;
	const nativeIsFinite = _nativeIsFinite;



	/**
	 * 
	 * 
	 * @module isFinite
	 * 
	 * @description 值是否是有限数字
	 * 
	 * @param {*} value 需要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * console.log( _.isFinite(100) );
	 * 
	 * // false
	 * console.log( _.isFinite(1e10000) );
	 * 
	 */

	const _isFinite = function (value) {
	    return isNumber$1(value) && nativeIsFinite(value);
	};


	var _isFinite_1 = _isFinite;

	const checkedType$5 = checkedType_1,
	        isObjectLike$4 = isObjectLike_1;



	/**
	 * 
	 * @module isBigInt
	 * 
	 * @description 值是否是BigInt类型
	 * 
	 * 
	 * 
	 * 
	 * @param {*} value 需要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * let bigInt1 = 123n,
	 *      bigInt2 = BigInt(456),
	 *      bigInt3 = Object(789n);
	 *
	 * // true
	 * console.log( isBigInt(bigInt1) );
	 * // true
	 * console.log( isBigInt(bigInt2) );
	 * // true
	 * console.log( isBigInt(bigInt3) );
	 * 
	 */
	function isBigInt$1 (value) {
	    return (typeof value === 'bigint') ||
	            ( isObjectLike$4(value) && checkedType$5(value) === 'BigInt' );
	}





	var isBigInt_1 = isBigInt$1;

	const checkedType$4 = checkedType_1,
	        isObject$1 = isObject_1;

	/**
	 * 
	 * @module isFunction
	 * 
	 * @description 值是否是函数
	 * 
	 * 
	 * 
	 * 
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 * 
	 * @example
	 * 
	 * // true
	 * console.log(_.isFunction(function f(){}))
	 * 
	 * 
	 */
	function isFunction$1 (value) {
	    return (typeof value === 'function') ||
	            (isObject$1(value) && checkedType$4(value) === 'Function');
	}



	var isFunction_1 = isFunction$1;

	const isUndefined$2 = isUndefined_1,
	    isNull$2 = isNull_1;

	/**
	 *
	 * @module isTrueValue
	 *
	 * @description 值是否是真值
	 *
	 * 在这里，真值的概念为不等于 undefined ，null ，0 ，false，
	 *
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 *
	 * @example
	 *
	 * // false
	 * console.log(_.isTrueValue(undefined));
	 *
	 * // false
	 * console.log(_.isTrueValue(0));
	 *
	 * // false
	 * console.log(_.isTrueValue(null));
	 *
	 * // false
	 * console.log(_.isTrueValue(false));
	 *
	 * // true
	 * console.log(_.isTrueValue('0'));
	 *
	 */
	function isTrueValue$1(value) {
	    return (
	        !isUndefined$2(value) && !isNull$2(value) && value !== 0 && value !== false
	    );
	}


	var isTrueValue_1 = isTrueValue$1;

	const isUndefined$1 = isUndefined_1,
	        isNull$1 = isNull_1;

	/**
	 * 
	 * @module isFalseValue
	 * 
	 * @description 检查是否是假植
	 * 
	 * 在这里，假值的概念为值等于 undefined ，null ，false ，0
	 * 
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * 
	 * // false
	 * console.log( _.isFalseValue(0) );
	 * console.log( _.isFalseValue(false) );
	 * console.log( _.isFalseValue(null) );
	 * console.log( _.isFalseValue(undefined) );
	 * 
	 * 
	 */
	function isFalseValue$1 (value) {
	    return isUndefined$1(value) ||
	            isNull$1(value) ||
	            value === 0 ||
	            value === false;
	}





	var isFalseValue_1 = isFalseValue$1;

	const checkedType$3 = checkedType_1,
	    isNodeEnv$2 = isNodeEnv_1,
	    isObjectLike$3 = isObjectLike_1,
	    nodeUtil$1 = _nodeUtil;



	/**
	 * 
	 * @module isWeakMap
	 * 
	 * @description 检查值是否是WeakMap
	 * 
	 * 
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 * 
	 * 
	 * @example
	 * 
	 * // true
	 * console.log(_.isWeakMap(new WeakMap()))
	 * 
	 */
	function isWeakMap$1 (value) {
	    return isNodeEnv$2() ?
	            nodeUtil$1.isWeakMap(value) :
	            isObjectLike$3(value) && checkedType$3(value) === 'WeakMap';
	}


	var isWeakMap_1 = isWeakMap$1;

	const checkedType$2 = checkedType_1,
	    isNodeEnv$1 = isNodeEnv_1,
	    isObjectLike$2 = isObjectLike_1,
	    nodeUtil = _nodeUtil;

	/**
	 *
	 * @module isWeakSet
	 *
	 * @description 检查值是否是WeakSet
	 *
	 *
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 *
	 *
	 * @example
	 *
	 * // true
	 * console.log(_.isWeakSet(new WeakSet()))
	 *
	 */
	function isWeakSet$1(value) {
	    return isNodeEnv$1()
	        ? nodeUtil.isWeakSet(value)
	        : isObjectLike$2(value) && checkedType$2(value) === 'WeakSet';
	}

	var isWeakSet_1 = isWeakSet$1;

	const checkedType$1 = checkedType_1,
	        isObjectLike$1 = isObjectLike_1;


	/**
	 * 
	 * @module isError
	 * 
	 * @description 是否是Error类型
	 * 
	 * @param {*} value 想要检查的值
	 * @returns {Boolean}
	 * 
	 * @example
	 * 
	 * // true
	 * console.log(_.isError(new Error()))
	 * 
	 */
	function isError$1 (value) {
	    return isObjectLike$1(value) && checkedType$1(value) === 'Error';
	}


	var isError_1 = isError$1;

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
	    compact = compact_1,
	    withOut = withOut_1,
	    sample = sample_1,
	    sampleSize = sampleSize_1,
	    size = size_1,
	    shuffle = shuffle_1,
	    before = before_1,
	    after = after_1,
	    delay = delay_1,
	    isArray = isArray_1,
	    isObject = isObject_1,
	    isNaN = _isNaN,
	    isBoolean = isBoolean_1,
	    isNumber = isNumber_1,
	    isObjectLike = isObjectLike_1,
	    isString = isString_1,
	    isSymbol = isSymbol_1,
	    isUndefined = isUndefined_1,
	    isNull = isNull_1,
	    isFinite$1 = _isFinite_1,
	    isBigInt = isBigInt_1,
	    isFunction = isFunction_1,
	    isTrueValue = isTrueValue_1,
	    isFalseValue = isFalseValue_1,
	    isWindow = isWindow_1,
	    isNodeEnv = isNodeEnv_1,
	    isDate = isDate_1,
	    isPlainObject = isPlainObject_1,
	    isMap = isMap_1,
	    isSet = isSet_1,
	    isWeakMap = isWeakMap_1,
	    isWeakSet = isWeakSet_1,
	    isError = isError_1,
	    isRegExp = isRegExp_1;



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
	    forEachRight,
	    upperFirst,
	    toLower,
	    compact,
	    withOut,
	    sample,
	    sampleSize,
	    size,
	    shuffle,
	    before,
	    after,
	    delay,
	    isArray,
	    isObject,
	    isNaN,
	    isBoolean,
	    isNumber,
	    isObjectLike,
	    isString,
	    isSymbol,
	    isUndefined,
	    isNull,
	    isFinite: isFinite$1,
	    isBigInt,
	    isFunction,
	    isTrueValue,
	    isFalseValue,
	    isWindow,
	    isNodeEnv,
	    isDate,
	    isPlainObject,
	    isMap,
	    isSet,
	    isWeakMap,
	    isWeakSet,
	    isError,
	    isRegExp
	};

	return src;

})));

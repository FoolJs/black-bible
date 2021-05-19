

const reduce = require('./reduce'),
        filter = require('./filter'),
        map = require('./map');

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
function camelCase (str) {
    if (typeof str !== 'string') {
        throw new Error(NO_STRING_ERROR);
    }

    let arr = filter( str.split(isSpecialChar), item => item !== '' );

    arr = map(arr, (item, index) =>
        index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    ).join('').split('');

    reduce(arr, (pre, cur, index) => {
        if ( isNumber.test(pre) ) {
            if ( isLetter.test(cur) ) {
                arr[index] = cur.toUpperCase();
            }
        }
        return cur;
    });

    return arr.join('');
}


module.exports = camelCase;
const isWindow = require('./isWindow'),
        isNodeEnv = require('./isNodeEnv');


/**
 * @private
 * @description 获取全局对象
 * 
 * 若是globalThis存在使用globalThis，否则根据环境使用对应的方式获取全局对象
 * 
 * @returns {Object} 全局对象
 */
function _globalThis () {
    if ( typeof globalThis !== 'undefined' ) {
        return globalThis;
    }
    if ( isWindow() ) {
        return window;
    }
    if ( isNodeEnv() ) {
        return global;
    }
}


module.exports = _globalThis;
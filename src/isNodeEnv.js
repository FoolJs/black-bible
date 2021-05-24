const isWindow = require('./isWindow'),
    checkedType = require('./checkedType'),
    isObjectLike = require('./isObjectLike');


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
function isNodeEnv () {
    if (isWindow()) {
        return false;
    }
    if (globalThis) {
        return isObjectLike(globalThis) && checkedType(globalThis) === 'global';
    }
    return isObjectLike(global) && checkedType(global) === 'global';
}

module.exports = isNodeEnv;
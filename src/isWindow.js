const checkedType = require('./checkedType'),
        isObjectLike = require('./isObjectLike');

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
function isWindow () {
    if ( typeof window !== 'object' ) {
        return false;
    }

    if (typeof globalThis !== 'undefined') {
        return globalThis === window;
    }

    return isObjectLike(window) && checkedType(window) === 'Window';
}




module.exports = isWindow;
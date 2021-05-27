const isNodeEnv = require('./isNodeEnv');



/**
 * @private
 * @description Node的util模块
 * 
 * @returns {Object}
 */
function f() {
    try {
            return isNodeEnv() ? require('util').types : {};
    } catch (error) {}
}

const util = f();


module.exports = util;

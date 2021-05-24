const isNodeEnv = require('./isNodeEnv');

try {
    const util = isNodeEnv() ? require('util').types : {};
} catch (error) {}




function f() {
    try {
            return isNodeEnv() ? require('util').types : {};
    } catch (error) {}
}

const util = f();


module.exports = util;

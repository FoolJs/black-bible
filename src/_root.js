const isWindow = require('./isWindow'),
        isNodeEnv = require('./isNodeEnv');

function root () {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if ( isWindow() ) {
        return window;
    }
    if ( isNodeEnv() ) {
        return global;
    }
}


module.exports = root();
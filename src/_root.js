const isWindow = require('./isWindow'),
        isNodeEnv = require('./isNodeEnv');

function rooted () {
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


const root = rooted();

module.exports = root;
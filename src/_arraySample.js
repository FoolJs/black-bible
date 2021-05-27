
const random = require('./random');

/**
 * @private
 * @param {Array} arr array
 * @returns {any}
 */
function arraySample (arr) {
    let len = arr.length;

    if (len === 0) {
        return undefined;
    } else if (len === 1) {
        return arr[0];
    } else {
        return arr[ random(0, len - 1) ];
    }
}


module.exports = arraySample;
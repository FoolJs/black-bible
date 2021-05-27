const map = require('./map');

/**
 * @private
 * @param {*} str 
 * @returns {String}
 */
function toUpperAll (str) {
    return map(str, char => char.toUpperCase()).join('');
}



module.exports = toUpperAll;
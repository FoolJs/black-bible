const map = require('./map');

function toUpperAll (str) {
    return map(str, char => char.toUpperCase()).join('');
}



module.exports = toUpperAll;
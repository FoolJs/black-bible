

/**
 * 
 * @param {{}} obj object
 * @param {Function} predicate 断言
 * 
 */
function objectEvery (obj, predicate) {

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            
            if ( !predicate(element, key, obj) ) {
                return false;
            }
        }
    }
    return true;
}


module.exports = objectEvery;
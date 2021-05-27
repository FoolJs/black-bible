
/**
 * @private
 * @param {Set} set set
 * @param {Function} predicate 断言
 * @param {Number} fromIndex 
 */
function setFind(set, predicate, fromIndex) {
    let keys = Array.from( set.keys() );
    
    for (; fromIndex < keys.length; fromIndex++) {
        let value = keys[ fromIndex ];

        if ( predicate(value, value, set) ) {
            return value;
        }
    }
}



module.exports = setFind;
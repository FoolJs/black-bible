

/**
 * 
 * @param {Array} arr array
 * @param {Function} predicate 断言函数
 * @param {Number} fromIndex 起始索引
 * @returns {any} 第一个使函数返回True的项的
 */
function arrayFind(arr, predicate, fromIndex) {
    let len = arr.length;

    for (; fromIndex < len; fromIndex++) {
        if ( predicate(arr[fromIndex], fromIndex, arr) ) {
            return arr[fromIndex];
        }
    }
}



module.exports = arrayFind;
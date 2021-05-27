
/**
 * 
 * @private
 * @description 删除数组中所有等于item的元素，该方法在原数组修改
 * 
 * @param {Array} arr array
 * @param {any} item item
 * @returns {Array} 修改后的数组
 */
function pullOne (arr, item, i=0) {
    for (; i < arr.length; i++) {
        if ( arr[i] === item ) {
            arr.splice(i, 1);
            pullOne(arr, item, i);
            break;
        }
    }
    return arr;
}


module.exports = pullOne;
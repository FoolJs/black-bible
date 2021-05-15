

/**
 * @description 交换数组i和j位置的元素
 * @param {Array} arr 数组
 * @param {Number} i 索引
 * @param {Number} j 索引
 * @returns 交换元素后的数组
 */
function swapElem (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}



module.exports = swapElem;
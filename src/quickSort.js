/**
 * @description 快排函数
 * @param {Array} arr 数组
 * @param {Number} left 起始下标
 * @param {Number} right 终点下标
 * @returns 排序完成后的数组
 */
function quickSort (arr, left = 0, right = arr.length - 1) {
    let partitionIndex = 0;

    if (left < right) {
        partitionIndex = partition(arr, left, right);

        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }

    return arr;
}

/**
 * @description 将数组或数组的某一部分以一个轴心分隔成两个部分
 * @param {Array} arr 数组
 * @param {Number} left 开始循环的下标
 * @param {Number} right 接受循环的下标
 * @returns 一个轴心下标，左边元素都比它小，右边元素都比它大
 */
function partition (arr, left, right) {
    let pivot = left,
        index = pivot + 1;

    for (let i = index; i <= right; i++) {
        if (arr[pivot] > arr[i]) {
            swap(arr, index, i);
            index += 1;
        }
    }

    swap(arr, pivot, index - 1);

    return index - 1;
}

/**
 * @description 交换数组元素位置
 * @param {Array} arr 一个数组
 * @param {Number} i 想要交换的索引i
 * @param {Number} j 想要交换的索引j
 */
function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}







module.exports = quickSort;
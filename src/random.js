
/**
 * 
 * @module
 * @description 随机数函数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @param {Boolean} floating 是否包括浮点数
 * @returns {Number} 一个数字
 * 
 * @example
 * 
 * // 2, 5, 1, 1, 2
 * _.forEach(5, () => {
 * console.log( _.random(1, 5) );
 * });
 * 
 * 
 */
function random(min,max, floating=false) {
    if (floating) {
        return min + Math.random() * (max - min);
    }
    return Math.floor(min + Math.random() * (max - min + 1));
}





module.exports = random;

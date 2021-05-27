/**
 * @private
 * @description map版filter
 * @param {Map} map map
 * @param {Function} cb 对每个元素调用的函数
 * @returns 函数返回true的map的项组成的数组
 */
function mapFilter(map, cb) {
    let cache = [];

    for (const iterate of map) {
        let key = iterate[0],
            value = iterate[1];

        if (cb(value, key, map)) {
            cache.push(key);
        }
    }

    return cache;
}

module.exports = mapFilter;

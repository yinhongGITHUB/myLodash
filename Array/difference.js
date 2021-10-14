/**
 * @param {Array} arr 要检查的数组
 * @param {Array} [values] 要排除的值 
 * @returns {Array} 返回过滤值的新数组
 */
export let myDifference = function (arr, values) {
    let ret = []// 最终的结果
    arr.forEach(item => {
        if(!values.includes(item)) ret.push(item)
    })
    return ret;
}

















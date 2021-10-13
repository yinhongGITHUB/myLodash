/**
 * 
 * @param {Array} arr 要压缩的数组
 * @returns {Array} 返回过滤值的新数组
 */
import {
    checkArr
} from '../common/utils.js'

let myCompact = function (arr) {
    // 先做参数校验
    if (!checkArr(arr)) throw "请传入正确的参数";
    let ret = []// 最终的结果
    arr.forEach(item => {
        if (item) ret.push(item)
    });
    return ret
}
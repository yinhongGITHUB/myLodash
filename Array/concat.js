/**
 * 
 * @param {Array} arr 要连接的数组
 * @param  {...any} arg 要连接的值
 * @returns {Array} 返回新的串联数组
 */
import {
    checkArr
} from '../common/utils.js'
export let myConcat = function (arr, ...arg) {
    // 先做参数校验
    if (!checkArr(arr)) throw "请传入正确的参数";
    let ret = [...arr]// 最终的结果
    arg.forEach(item => {
        if (checkArr(item)){// 是数组，每一项都追加进结果数组
            item.forEach(val => {
                ret.push(val)
            })
        }else{// 不是数组，当前项直接追加进结果数组
            ret.push(item)
        }
    })
    return ret;
}
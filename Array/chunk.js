/**
 * 
 * @param {Array} arr 要处理的数组
 * @param {number} size 每个块的长度
 * @returns {Array} 返回新的块数组
 */
import {
  checkArr
} from '../common/utils.js'

export let myChunk = function (arr, size) {
  // 先做参数校验
  if (!checkArr(arr)) throw "请传入正确的参数";
  let ret = [] // 最终的结果
  let temp = []; // 临时数组
  let count = 0; // 计数器
  for (let i = 0; i < arr.length; i++) {
    if (count === size) {
      ret.push(temp);
      count = 0;
      temp = [];
      temp.push(arr[i])
    } else {
      temp.push(arr[i])
      count++
    }
  }
  // 特殊情况判断，最后的数组不足一个size
  if (temp.length > 0) {
    ret.push(temp)
  }
  return ret;
};
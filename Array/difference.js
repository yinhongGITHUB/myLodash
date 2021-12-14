/**
 * @param {Array} arr 要检查的数组
 * @param {Array} [values] 要排除的值
 * @returns {Array} 返回过滤值的新数组
 */
import { checkArr } from "../common/utils.js";
export let myDifference = function (arr, values) {
  // 先做参数校验
  if (!checkArr(arr)) throw "请传入正确的参数";
  let ret = []; // 最终的结果
  arr.forEach((item) => {
    if (!values.includes(item)) ret.push(item);
  });
  return ret;
};

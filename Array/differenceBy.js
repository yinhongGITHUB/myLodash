/**
 * @param {Array} arr 要检查的数组
 * @param {Array} [values] 要排除的值
 * @param {功能} [iteratee] 每个元素调用的迭代器
 * @returns {Array} 返回过滤值的新数组
 */
import { checkArr } from "../common/utils.js";
export let myDifferenceBy = function (arr, values, iteratee) {
  // 先做参数校验
  if (!checkArr(arr)) throw "请传入正确的参数";
  if (!checkArr(values)) throw "请传入正确的参数";
  let result = [];

  if (typeof iteratee === "string") {
    // 当iteratee为字符串时   做key使用
    let temp = iteratee;
    result = values.filter((v) =>
      arr.map((val) => {
        return val[temp] !== v[temp];
      })
    );
    return result;
  } else if (typeof iteratee === "function") {
    // 当iteratee为函数时,即对数据进行处理
    for (let i = 0; i < arr.length; i++) {
      const temp = arr[i];
      let count = 0;
      for (let j = 0; j < values.length; j++) {
        count++;
        if (iteratee(temp) === iteratee(values[j])) {
          count = 0;
          break;
        } else if (count >= values.length) {
          result.push(temp);
        }
      }
    }
    return result;
  }
};
let test1 = myDifferenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
console.log(test1); // [ { x: 2 } ]
let test2 = myDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
console.log(test2); // [ 1.2 ]

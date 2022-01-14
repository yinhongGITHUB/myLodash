import { checkArr, isEqual, checkFunction } from "../common/utils.js";
/**
 *
 * @param {Array} array 要检查的数组
 * @param {...Array} values 要排除的值
 * @param {功能} comparator 每个元素调用的比较器
 * @returns
 */
export function differenceWith(array, values, comparator) {
  // 类型检测
  if (!checkArr(array)) throw "请传入正确的参数";
  if (!checkArr(values)) throw "请传入正确的参数";
  // 比较器判断
  !checkFunction(comparator) && (comparator = isEqual);
  let result = [];
  array.forEach((item) => {
    values.forEach((val) => {
      let res = comparator(item, val);
      res && result.push(res);
    });
  });
  return result;
}

let array = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
differenceWith(array, [{ x: 1, y: 2 }]);

// 判断是不是数组
export function checkArr(arr) {
  return Array.isArray(arr);
}
// 判断是不是函数
export function checkFunction(fun) {
  return typeof fun === "function";
}
// 比较两个值是否不同,相同返回undefined 不同返回第一个值
export function isEqual(a, b) {
  var aKeys = Object.getOwnPropertyNames(a);
  var bKeys = Object.getOwnPropertyNames(b);
  if (aKeys.length != bKeys.length) {
    return a;
  }
  for (var i = 0; i < aKeys.length; i++) {
    var key = aKeys[i];

    var propA = a[key];
    var propB = b[key];

    if (typeof propA === "object") {
      if (isEqual(propA, propB)) {
        return;
      } else {
        return a;
      }
    } else if (propA !== propB) {
      return a;
    }
  }
  return;
}

/**
 * 
 * @param {The array to process（要处理的数组）} array 
 * @param {The length of each chunk（每个块的长度）} size 
 * @returns {(Array): Returns the new array of chunks（返回一个新的块数组）}
 */
let myChunk = function (array, size) {
  //进来先做类型判断
  if (!(array instanceof Array) || typeof size !== "number") {
    throw "请传入正确的参数";
  }
  let newArray = []; // 结果数组
  let start = 0; // 开始指针
  let i = 0; // 结束指针
  // 循环每次拿size大小的数组
  for (i = size; i <= array.length; i += size) {
    newArray.push(array.slice(start, i));
    start = i;
  }
  // 做个特殊处理，判断前面循环完之后，数组后面有没有不够一个size的内容
  if (i - size !== array.length) {
    newArray.push(array.slice(i - size));
  }
  return newArray;
};
module.exports =  myChunk
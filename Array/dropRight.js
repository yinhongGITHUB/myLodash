export function myDropRight(array, num = 1) {
  if (array.length < num) {
    return [];
  }
  let res = [];
  for (let i = array.length - 1; i >= 0; i--) {
    num--;
    if (num < 0) {
      res.unshift(array[i]);
    }
  }
  console.log(res);
}
myDropRight([1, 2, 3]); //[ 1, 2 ]
myDropRight([1, 2, 3], 2); //[ 1 ]
myDropRight([1, 2, 3], 5); //[ ]
myDropRight([1, 2, 3], 0); // [1, 2, 3]

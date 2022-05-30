export function myDrop(array, num = 1) {
  if (array.length < num) {
    return [];
  }
  let res = [];
  for (let i = 0; i < array.length; i++) {
    num--;
    if (num < 0) {
      res.push(array[i]);
    }
  }
  console.log(res);
}
myDrop([1, 2, 3]); // [ 2, 3 ]
myDrop([1, 2, 3], 2); // [ 3 ]
myDrop([1, 2, 3], 5); // [ ]
myDrop([1, 2, 3], 0); // [ 1, 2, 3 ]

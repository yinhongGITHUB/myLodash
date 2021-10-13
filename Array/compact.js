/**
 * 
 * @param {任意数组} arr 
 * @returns {返回的是一个每一项都为true的新数组}
 */
let myCompact = function (arr) {
    // 先做参数校验
    if (!(arr instanceof Array)) {
        throw "请传入正确的参数";
    }
    let newArr = []
    arr.forEach(item => {
        if (item) newArr.push(item)
    });
    return newArr
}
module.exports = myCompact
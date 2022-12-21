// TOÁN TỬ SO SÁNH - P2

/**
 * === So sánh bằng tuyệt đối(cả giá trị vs type)
 * == so sánh bằng chỉ giá trị với nhau
 * !==
 */

var a = 1;
var b = 1;
console.log(a == b);// true
console.log(a === b);// true

var a = '1', b = 1;
console.log(a == b);  //true
console.log(a != b);  //flase
console.log(a !== b);  //true

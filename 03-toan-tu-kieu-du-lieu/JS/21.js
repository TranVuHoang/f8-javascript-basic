/** Toán tử ++, --
 * Prefix: tiền tố
 * Postfix: hậu tố
 */

var a = 6;

// việc 1: +1 cho a, a = a+1 => a = 7
// việc 2: trả về a sau khi được +1
// console.log(++a); //7

// việc 1: 'a copy', 'a copy' = 6
// việc 2: trừ 1 của a, a= a - 1 => a = 5
// việc 3: trả về 'a copy'
var output = a--;
console.log("output:", output);

console.log("a: ", a);

var number = 6;
// var output = number++ + --number;// 6+(7-1)=12
var output = ++number * 2 - number-- * 2; // 7*2 - (7)*2= 0

console.log("output:", output);

/**
 * return trong hàm javascript cơ bản
 */

var isConfirm = confirm('Message?');
console.log(isConfirm); // true

function cong(a, b) {
    return a + b;
}
console.log(cong(2, 8)); //10

var result = cong(4, 5);
console.log(result) // 9


function tru(a, b) {
    a -b;
    console.log(123); //123
    alert();
}
var result = tru(6, 3);
console.log(result);// undefined

function tru1(a, b) {
    return a -b;
    console.log(123);
    alert();
}
var result = tru1(6, 3);
console.log(result);// 3

function cong2(a, b) {
    return a.toString() + b.toString();
}
console.log(cong2('Hoàng'+' ', 25));

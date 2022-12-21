// Ôn lại kiến thức về Truthy và Falsy
var a = ''; // false (chuỗi rỗng) -> falsy
var b = 0; //false (số 0)-> falsy
var c = []; //true
var d = 1 > 2; // false
var e = {}; // true
var f = '0'; // true

console.log(Boolean(a), Boolean(b), Boolean(c), Boolean(d), Boolean(e), Boolean(f));
var a = 1;
var b = -1;
var c = 0;
var d = 0;

var e = a <= b; // flase (a = 1 > b=-1)
var f = c === d;// true (c = 0 == d= 0)
var g = a >= c;// true (a = 1 > c = 0)

console.log(e, f, g) // Output: false true true
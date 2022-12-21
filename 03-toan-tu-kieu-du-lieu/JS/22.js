var a = 1;
var b = ++a * a--;

console.log(b); // Output: b = (1+ 1) * 2 = 4
console.log(a); // ++a => a=1+1=2, a-- => a = 2-1=1

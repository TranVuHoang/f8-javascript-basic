/**
 * vòng lặp while 
 * 
 */

var i = 0;
while (i < 10) {
    i++;
    console.log(i);
}
var b = 1;
result = b++;
console.log(result);
console.log(b);

var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

var myArray = ['Javascript', 'PHP', 'Java'];
var i = 0, myLength = myArray.length;
// xuất mảng bằng vòng lặp while
while (i < myLength) {
    console.log(myArray[i]);
    i++;
}
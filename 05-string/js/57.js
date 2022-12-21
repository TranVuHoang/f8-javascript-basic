/**
 * 57. Làm việc với chuỗi
 * 
 * keyword: javascript string methods
 * 
 * 1. length: độ dài chuỗi
 * 2. find index
 * 3. cut setting
 * 4. replace;
 * 5. convert to upper case
 * 6. convert to lower case
 * 7. trim
 * 8. split
 * 9. get a character by index
 * 
 */

//#2. find index
var myString = 'Học js tại js js F8!';
console.log(myString.indexOf('js')); // tìm vị trí js
console.log(myString.indexOf('js', 6));// tìm vị trí js ở vị trí sau chữ js
console.log(myString.lastIndexOf('js'));// tìm vị trí cuối cùng của js

console.log(myString.search('js'));
console.log(myString.search('js', 6));// không hỗ trợ vị trí, khác vs indexOf



var myString = 'Học JS tại F8!';
//#3. cắt chuỗi
console.log(myString.slice(4)); // cắt từ vị trí 4 đến hết
console.log(myString.slice(0)); // cắt hết từ đầu - trả về nguyên chuỗi ban đầu
console.log(myString.slice(-3, -1))// cắt từ vị trí cuối (-3 về -1)- từ phải sang trái

//4. replace string
console.log(myString.replace('JS', 'Javascript'));// thay thế chữ JS thành Javascript

var myString = 'Học JS tại JS JS F8!';
console.log(myString.replace('JS', 'Javascript'));// thay thế chữ JS xuất hiện đầu tiên thành Javascript
console.log(myString.replace(/JS/g, 'Javascript'));// thay thế tất cả chữ JS xuất hiện thành Javascript

//#5. convert to upper case
var myString = 'Học JS tại F8!';
console.log(myString.toUpperCase());

//#6. convert to lower case
console.log(myString.toLowerCase());

// #7. trim: xử lý ký tự thừa ở 2 đầu
var myString = '    Học JS tại F8!     ';
console.log(myString.length);
console.log(myString.trim());
console.log(myString.trim().length);

//#8 split: chuyển đổi chuỗi thành array(dựa vào điểm chung mà cắt chuỗi)
var language = "HTML, CSS, Javascript, PHP";
console.log(language.split(', '));//=> ['HTML', 'CSS', 'Javascript', 'PHP']

var language = "Javascript";
console.log(language.split(''));//=>  ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

//#9. get a character by index: lấy ra 1 chữ cái trong chuỗi
const myString2 = 'Son Dang';

// cách 1
console.log(myString2.charAt(4)); // lấy ký tự ở ví trí số 4 //D
// console.log(typeof myString2.charAt(10));

// cách 2
console.log(myString2[4])
console.log(typeof myString2[4]) // in ra vị trí thứ 4: D
console.log(typeof myString2[10])// undefined
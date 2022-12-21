// Đối tượng Date

var date = Date(); // tạo 1 biến (string) date
var date = new Date(); // tạo 1 đối tượng(object) date

console.log(typeof date);
console.log(date);
console.log(date.getFullYear());

var year = date.getFullYear();
console.log(year);

var month = date.getMonth() + 1;
console.log(month);

var day = date.getDate();
console.log(day);

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(`${year} ${month} ${day} `);
console.log(`${year} ${month} ${date} `);

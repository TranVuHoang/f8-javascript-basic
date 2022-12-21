/** Phương thức include() cho String và Array 
 * includes method: 
 * - kiểm tra 1 chuỗi có nằm trong 1 chuỗi hay không
 * - tìm 1 phần tử có nằm trong 1 mảng hay không
 * syntax: w3school
 * 
*/
// 
console.log(Array.prototype.includes);// retrun a function
console.log(String.prototype.includes);// retrun a function

console.log(Object.prototype.includes);// retrun undefined
console.log(Date.prototype.includes);// retrun undefined


//#1. Sử dụng phương thức includes với string
var title = 'Responsive web desgin';
console.log(typeof title.includes('web')); // return a string: boolean
console.log(title.includes('web')); // return a boolean: true

// tìm từ 'Responvive' có trong chuỗi k? (tìm từ đầu đến cuối chuỗi)
console.log(title.includes('Responsive'));// return a boolean: true

// tìm từ 'Responsive' có trong chuỗi k? (tìm từ vị trí index)
console.log(title.includes('Responsive', 1));// return a boolean: false

//#2. Sử dụng phương thức includes vs array
const courses = ['PHP', 'Javascript', 'Java', 'Python']; // length of Array(courses): 4
console.log(courses.includes('PHP'));// return a boolean: true
console.log(courses.includes('Javascript'));// return a boolean: true
console.log(courses.includes('Ruby'));// return a boolean: true

// vị trí mà bạn tìm được (từ index)
console.log(courses.includes('Javascript', 1));// return a boolean: true
// tìm từ 'Java' ở vị trí bắt đầu từ index = -2 có trong mảng k?( index[-i] <=> index[length] + (-i)] -> index[-2] = index[4+-2]
console.log(courses.includes('Java', -2));// return a boolean: true

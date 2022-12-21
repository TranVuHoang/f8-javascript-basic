/**
 * Call back - Phần 2
 * 
 * 1. Call back là hàm
 * 2. được truyền vào đối số của 1 hàm khác
 * 3. được gọi lại (trong hàm nhận đối số)
 */
// ex1
var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
// tạo phương thức khởi tạo map2()
Array.prototype.map2 = function (fnCallBack) {
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        fnCallBack(this[i], i);
    }
}
courses.map2(function (course, index) {
    console.log(index, course);
})

// call back map: là 1 hàm, được truyền qua đối số, 
// declar function
// courses.map(function (course) {
//     console.log(index, course);
// });

// expression function
var htmls = courses.map(function (course) {
    return `${course}\n`;
})
console.log(htmls.join(''));


//-----------ex-------------
const numbers = [1, 2, 3];
const numbe = numbers.map(function (number) {
    return number;
})
console.log(numbe.join('\n'));
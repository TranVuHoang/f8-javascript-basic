/** Tự tạo phương thức myForEach() 
 * 
*/
var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]
var result = courses.forEach(function (course, index, array) {
    console.log(course, index, array);
    // return course, index, array;
});

// Tự định nghĩa hàm foreach2 để xem nguyên lý hoạt động của vòng forEach
//----------------Foreach 2------------------
Array.prototype.forEach2 = function (fnCallBack) {
    for (var index in this) {
        console.log('index: ', index);
    }
}
Array.prototype.testProperty1 = 1;
Array.prototype.testMethod2 = function () {

};
Array.prototype.forEach2 = function (fnCallBack) {
    for (const index in this) {
        if(this.hasOwnProperty(index)) {
            fnCallBack(this[index], index, this);
        }
    }
}
var result = courses.forEach2(function (course, index, array) {
    console.log(course, index, array);
});
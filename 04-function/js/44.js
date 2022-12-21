/**
 * 1. Tham số?
 *  - Định nghĩa?
 *  - Kiểu dữ liệu?
 *  - Tính private?
 *  - 1 tham số
 *  - Nhiều tham số(2 tham số trở lên)
 * 
 * 2. Truyền tham số
 *  - 1 tham số
 *  - nhiều tham số(2 tham số trở lên)
 * 3. Argument?
 *  - Đối tượng argument
 *  - Giới thiệu vòng for of
 */


//1. tạo hàm với 1 tham số
function writeLog(message) {
    console.log(message);// tham số (biến) message
}
writeLog('Test message'); // đối số kiểu text
writeLog(['Javascript', 'PHP', 123]); // đối số kiểu mảng

// console.log(message);// tham số (biến) message

//2. tạo nhiều tham số và truyền nhiều tham số
// ex1
function writeLog(message1, message2) { // tạo tham số 1: message1, tham số 2: message2
    console.log(message);// tham số (biến) message
}
writeLog('Test1', "Test2"); // truyền tham số : đối số 1: Test1, đối số 2: Test2

// ex2
function writeLog(message1, message2) {
    if (message1) {
        console.log(message1)
    }
    if (message2) {
        console.log(message2)
    }
}
writeLog("Log 1", 'Log 2');

// 3. Argument

console.log(1, 2, 3, 4, 5, 6); 

function writeLog2() {
    console.log(arguments)
}
writeLog2('Log1', 'Log2');

function writeLog2() {
    console.log(arguments)
}
writeLog2();

function writeLog3() {
    for (var params of arguments) {
        console.log(params)
    }
}
writeLog3('Log1', 'Log2');

function writeLog4() {
    var myString = '';
    for (var param of arguments) {
        myString  += `${param} -`;
    }
    console.log(myString);
}
writeLog4('Log1', 'Log2', 'log3', 'log4', 4, 5, 6);
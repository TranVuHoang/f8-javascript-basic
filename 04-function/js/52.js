/**
 * Một số điều cần biết về function
 * 
 * 1. Khi function đặt trùng tên
 * 2. khai báo biến trong hàm
 * 3. Định nghĩa hàm trong hàm
 * 
 */

//khi định nghĩa 2 function trùng tên thì function định nghĩa sau sẽ được gọi(thực thi)
function showMessage() {
    console.log('Message 1');
}

function showMessage() {
    console.log('Message 2');
}

function showMessage() {
    console.log('Message 3');
}

showMessage();

//2. khai báo biến trong hàm
function showMessage2() {
    var fullName = 'Son Dang';
    console.log(fullName);
}
showMessage2();

//3. định nghĩa hàm trong hàm
function showMessage3() {
    function showMessage4() {
        console.log('Message 4');
    }
    showMessage4();
}
showMessage3();
// showMessage4(); // do tính private nên k gọi được hàm showMessage4() ở ngoài

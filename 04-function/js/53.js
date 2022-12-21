//53. Các loại hàm
/**
 * Các loại function
 * 
 * 1. Declaration function: // tự định nghĩa function
 * 2. Expression function
 * 3. Arrow function
 * 
 */

// 1. Declaration function
function showMessage() {
    console.log('Declaration function');
}
showMessage();
// 2. Express function
var showMessage2 = function() {
    console.log('Express function');
};
showMessage2();

setTimeout(function() {

});

var myObject = {
    myFunction : function() {

    }
};
// hosting giúp cho Declaration function sẽ được gọi trước khi nó được định nghĩa(khởi tạo)
// Express function sẽ không được thực thi khi chưa được định nghĩa trước
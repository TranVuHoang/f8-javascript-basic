/**
 * Giới thiệu 1 số hàm built-in
 * 1. Alert(tạo ra 1 bảng(cửa sổ hộp thoại) thông báo ra màn hình)
 * 2. console (in ra màn hình giống lệnh print)
 * 3. confirm (Tạo 1 cửa sổ hộp thoại thông báo)
 * 4. prompt (tạo ra 1 cửa sổ hộp thoại)
 * 5. set timeout
 * 6. set interval
 */

// console.log('Đây là 1 dòng log')
// console.log(123)

var fullName = "Tran Vu Hoang";
var warn = "In ra cảnh báo màu vàng";
var error = "In ra thông báo lỗi màu đỏ";
// console.log(fullName);
// console.warn(warn);
// console.error(error);

// confirm("Xác nhận bạn đủ tuổi");
// prompt("Nhập số tuổi")

//Chạy đoạn code(Tạo 1 cửa sổ hộp thoại) sau 1 khoảng thời gian nhất định tính bằng mini giây

setTimeout(function () {
  alert("Thông báo");
}, 1000);
setInterval(function () {
  alert("Thông báo");
}, 1000);

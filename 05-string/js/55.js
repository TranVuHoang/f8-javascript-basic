/**
 * 55. Kiểu  dữ liệu chuỗi (string)
 * CHUỖI TRONG JAVASCRIPT
 * 
 * 1.Tạo chuỗi
 *  - Các cách tạo chuỗi
 *  - Nên dùng cách nào? lý do?
 *  - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 */

//1. Các cách tạo chuỗi
// cách 1:(khuyên dùng)
var fullName1 = 'Sơn Đặng';
console.log(typeof fullName1);

// cách 2:
var fullName2 = new String('Son Dang');
// alert(fullName2);
console.log(typeof fullName2);
// => dùng cách 1 vì n ngắn gọn hơn

// 2. Một số case sử dụng backslash (\)
var fullName1 = 'Son Dang la \"Sieu nhan\' ';
console.log(fullName1);

var fullName1 = 'Đây là dấu  \\'; // thêm 1 dấu \\ để hiển thị dấu \
console.log(fullName1);

// 3.Xem độ dài chuỗi
var fullName = "Son Dang";
console.log(fullName.length);

// 4. Một số chú ý độ dài khi viết code(tối đa 80 ký tự)

// cách 1: đặt dấu xuống dòng ở sau toán tử = 
var fullName = 
'12345 Một số chú ý độ dài khi viết codeMột số chú ý độ dài khi viết code Một số chú ý độ dài khi viết code'
console.log(fullName);

// cách 2: 
var fullName = '6785 Một số chú ý độ dài khi viết code'
+ '1. Một số chú ý độ dài khi viết code'
+ '2. Một số chú ý độ dài khi viết code';
console.log(fullName);

//5. Template string ES6

var firstName = 'Son', lastName = 'Dang';
console.log('Toi la:' +firstName +' '+lastName);
// thay bằng cặp dấu ``
console.log(`Tôi là: ${firstName} ${lastName}`);


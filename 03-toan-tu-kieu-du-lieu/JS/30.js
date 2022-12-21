/**
 * Câu lệnh điều kiện
 * if -else
 */

/**
 * 0
 * false
 * '' or "": chuỗi rỗng
 * undefined
 * NaN
 * null
 * -->  6 giá trị trên khi convert sang boolean sẽ là false
 */
var isSuccess = 1 < 2;// trả về kiểu giữ liệu boolean 
if (isSuccess) {
    console.log("Điều kiện đúng");
} else {
    console.log("Điều kiện sai");
}

var fullName = "Hoang Tran";// Hoang Tran không nằm trong 6 giá trị False -> boolean sẽ trả về true
if (fullName) {
    console.log("Điều kiện đúng");
} else {
    console.log("Điều kiện sai");
}
// Hiểu hơn về câu lệnh điều kiện
// và phép so sánh

var a = 1;
var b = 2;

if (a < b) {
    console.log('A < B'); // A < B
} else {
    console.log("A >= B")
}

var result = a < b;
console.log('result:', result); // true

// toán tử logic
var result = a < b && a < 0;
console.log('result:', result); // false

var result = a < b || a < 0;
console.log('result:', result); // true

var result = 'A' && 'B' && 'C'
console.log('result:', result); // B

var result = 'A' && 'B' && null && 'C'
console.log('result:', result); // null

var result = 'A' && NaN && 'B' && 'C'
console.log('result:', result); // NaN

var result = 0 && NaN && 'B' && 'C'
console.log('result:', result); // 0

if (result) {
    console.log('Điều kiện đúng');
} else {
    console.log("Điều kiện sai")
}

var result = 'a' || 'b' || 'c'; //a
console.log('result', result);

var result = 'a' || undefined || 'c'; //a
console.log('result', result);




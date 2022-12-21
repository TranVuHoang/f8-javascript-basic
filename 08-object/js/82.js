/**
 * 82. Math object
 * 
 * - Math.PI
 * - Math.round(): làm tròn số thập phân
 * - Math.abs(): giá trị tuyệt đối
 * - Math.ceil(): làm tròn lên 1 đơn vị
 * - Math.floor(): làm tròn xuống
 * - Math.random()
 * - Math.min()
 * - Math.max()
 * 
 */
// Math không phải object constructor

console.log(Math.PI); //3.141592653589793

console.log(Math.round(1.5)); //2

console.log(Math.abs(-4)); //4

console.log(Math.ceil(4.2));//5
console.log(Math.ceil(4.0000));//4
console.log(Math.ceil(-4.2));//-4

console.log(Math.floor(4.99999)); //4
console.log(Math.floor(-4.4)); //-5

console.log(Math.random());// trả về số thập phân ngẫu nhiên
console.log(Math.floor(Math.random() * 10));

var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
];
console.log(bonus[random]);

var random = Math.floor(Math.random() * 100);
console.log(random + "%");
if (random > 50)
    console.log('Bạn đã trúng thưởng, xin chúc mừng bạn !');
else
    if (random === 50)
        console.log('Bạn được thêm lượt quay');
    else
        console.log('Chúc bạn may mắn lần sau!');

console.log(Math.max(1, 2, 3, 4, 5));// 5
console.log(Math.min(-1, -2, -3, -4, -5)); //-5
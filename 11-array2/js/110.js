/**
 * reduce() : nhận về giá trị duy nhất, 
 * sau khi tính toán và sử lý trên các phần tử(element) trong 1 array
 */
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 0
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 900
    },
];

// #1.tính tổng số tiền trong mảng courses bằng vòng lặp.
// biến lưu trữ toTal
var toTal = 0;
// Lặp qua các phần tử
for (var value of courses) {
    //thực hiện việc lưu trữ
    toTal += value.coin;
};
console.log(toTal);

// #2. tính tổng số tiền trong mảng course bằng  hàm reduce()
// var i = 0;
// var toTal = courses.reduce(
//     function (course1, course2, course3, originArray) {// phương thức reduce() sẽ nhận 2 đối số truyền vào

//         i++;
//         // console.log(1, course1);
//         console.table({
//             'lượt chạy': i,
//             'Biến tích chữ': course1
//         });
//     },
//     0);

//-----------------
var i = 0;
// thông thường hàm xử lý cho 1 Object sẽ có 4 đối số: 
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    // các đối số:        1             2             3           4
    i++;
    var total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy:': i,
        'Biến tích chữ:': accumulator,
        'giá khóa học :': currentValue.coin,
        'Tích chữ được:': total,
        'test:':total
    });
    // console.table(object);
    // console.log(currentValue);
    // console.log(currentIndex);

    return total;
}
var totalCoin = courses.reduce(coinHandler, 0); 
console.log();
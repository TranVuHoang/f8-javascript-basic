/**
 * 67. Mảng Array trong Javascript
 * 
 * 1. Khởi tạo mảng
 *      - Các cách tạo
 *      - Sử dụng cách tạo mảng nào cho hợp lý? tại sao?
 *      - Kiểm tra data type(kiểu của mảng)
 * 
 * 2. Truy xuất mảng(gọi mảng)
 *      - Độ dài mảng
 *      - Lấy phần tử theo index 
 */


//Cách 1 khởi tạo array
var language = "HTML", language2 = 'CSS', language3 = "PHP";
var language = ['HTML', 'CSS', 'Javascipt', 'PHP']
var language = [
    'HTML',
    'CSS',
    'Javascipt',
    'PHP',
    'React js',
    null,
    undefined,
    function () {

    },
    NaN,
    0]

console.log(language)

// Cách 2 khởi tạo array, ít được khuyến cáo sử dụng
var language = new Array(
    'HTML',
    'CSS',
    'Javascipt',
    'PHP',
    'React js',
    null,
    undefined,
    function () {

    },
    NaN,
    0
);
console.log(language);
console.log(typeof language);

console.log(Array.isArray(language)); // kiểm tra biến có phải mảng array không
console.log(Array.isArray(new Array)); // kiểm tra biến có phải mảng array không

// 2. truy xuất mảng

console.log(language); //['HTML', 'CSS', 'Javascipt', 'PHP', 'React js', null, undefined, ƒ, NaN, 0]
console.log(language.length); // 10

console.log(language[2]);// CSS

const array1 = ['123', 'Scan', 'Javascript'];
console.log(typeof array1);
console.log(array1);

const array2 = new Array(1, 'PHP', 'HP', 'Lenovo');
console.log(typeof array2);
console.log(array2);
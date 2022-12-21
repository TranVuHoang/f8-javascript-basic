/**
 * Kiểu dữ liệu trong js
 * 
 * 1.Dữ liệu nguyên thủy - primitive data
 *      - Number
 *      - string
 *      - boolean
 *      - undefined
 *      - null
 *      - symbol
 * 
 * 2. Dữ liệu phức tạp - complex data
 *      - function
 *      - object
 */

// dữ liệu number type(kiểu số)
var a = 1, b = 2, c = 1.5;

// string type
var fullName = 'Son \'Dang';
var fullName = 'Son "Dang';
var fullName = "Son 'Dang";
var fullName = "Son \'Dang";
console.log(fullName);

//boolean type
var isSuccess = true;

// undefined type: không gán giá trị -> undefined
var age;
console.log(age);

// null type
var isNull = null; // null: không có gì
console.log(isNull);

//symbol
var id = Symbol('id');// unique: tính duy nhất
var id2 = Symbol('id');// unique: tính duy nhất

console.log(id2 === id); // trả về false vì đặc tính duy nhất của symbol

// function type

var myFunction = function () { // function tự định nghĩa
    alert('hi xin chào các bạn');
}
// myFunction(); // gọi hàm myFunction

function HelloWorld() {
    alert('Hello world!')
}
// HelloWorld(); // gọi hàm HelloWorld

// object type

var myObject = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi',
    myFunction: function () {
        
    }
};
console.log('myObject:', myObject)

// array type
var myArray = [
    'Javascript', 
    'PHP',
    'Node js'
];
console.log('myArray', myArray);

console.log(typeof a);
console.log(typeof fullName);
console.log(typeof isSuccess);
console.log(typeof age);
console.log(typeof isNull);
console.log(typeof myArray);
console.log(typeof myObject);
console.log(typeof myFunction);
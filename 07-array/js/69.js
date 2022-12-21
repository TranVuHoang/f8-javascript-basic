/**
 * 69. Làm việc với Array
 * 
 * 1. toString
 * 2. join
 * 3. pop
 * 4. push
 * 5. shift
 * 6. Unshift
 * 7. Splicing
 * 8. concat
 * 9. slipcing
 */

var language = [
    'javascript',
    'PHP',
    'Ruby'
]
// xuất ra mảng ban đầu
console.log(language);// return a array:  ['javascript', 'PHP', 'Ruby']

// 1. to string: chuyển kiểu mảng(array) về kiểu string(chuỗi)
console.log(language.toString()); //return a string:  javascript,PHP,Ruby

// 2. join - biến array thành chuỗi(string)
console.log(language.join());//javascript, PHP, Ruby
console.log(language.join(' '));//javascript PHP Ruby
console.log(language.join('-'));//javascript-PHP-Ruby
console.log(language.join('|'));//javascript|PHP|Ruby

// 3. pop: xóa đi phần tử cuối mảng và trả lại chính phần tử n đã xóa
console.log(language.pop());//return a string:  Ruby
console.log(language); // ['javascript', 'PHP']

console.log(language.pop());// PHP
console.log(language.pop());// javascript
console.log(language.pop());// undefined

//4. push thêm phần tử vào cuối mảng và trả về độ dài mới của mảng
var language = [
    'javascript',
    'PHP',
    'Ruby'
]// độ dài ban đầu của mảng là 3
console.log(language.push('Dart'));// độ dài mới của mảng sẽ là 4
console.log(language); // ['javascript', 'PHP', 'Ruby', 'Dart']

console.log(language.push('react js', 'java'));// độ dài mới của mảng sẽ là 4 + 2 = 6
console.log(language); // ['javascript', 'PHP', 'Ruby', 'Dart', 'Java']

// 5. shift : xóa đi phần tử đầu mảng và trả về phần tử bị xóa đó
console.log('==================[5. shift] :=================== ');
var language = [
    'javascript',
    'PHP',
    'Ruby'
]// độ dài ban đầu của mảng là 3
console.log(language.shift());// javascript
console.log(language.shift());// PHP
console.log(language.shift());// Ruby
console.log(language.shift());// ['undefine'] vì mảng lúc này k còn j để xóa
console.log(language);// []

//6. Unshift: thêm phần tử vào đầu mảng và trả về độ dài mới của mảng

console.log('-------------[6. unshift]--------');
var language = [
    'javascript',
    'PHP',
    'Ruby'
]
console.log(language.unshift('Hello'));//4
console.log(language);['Hello', 'javascript', 'PHP', 'Ruby']

// 7.Splicing: xóa 1 element bất kỳ trong array
console.log('===============[7.Splicing]============');
var language = [
    'javascript',
    'PHP',
    'Ruby'
]
language.splice(1, 2); // 1: đặt con trỏ vào vị trí 1['PHP'] 
// 2: và xóa đi 2 phần tử từ vị trí ['PHP'] là: 'PHP' và 'Ruby'
console.log(language);// ['javascript']

var language1 = [
    'javascript',    // index = 0
    'PHP',           // index = 1
    'Ruby'           // index = 2
]
console.log(language1);
language1.splice(1, 0, 'Dart'); // giải thích đối số truyền vào trong hàm splice:
// 1: vị trí cần chèn or xóa: con trỏ sẽ bắt đầu ở vị trí 'PHP'
// 0: không xóa ông nào,=> ['javascript', 'PHP', 'Ruby']
// 'Dart': Chèn ông Dart vào vị trí 1;=>  ['javascript', 'Dart', 'PHP', 'Ruby']
console.log(language1);
var language = [
    'javascript',
    'PHP',
    'Ruby'
]
language.splice(1, 1, 'C++');
// 1. vị cần thay thế
// 1. xóa đi 1 element là:'PHP' đi => 'javascript', 'Ruby'
// 'C++' : chèn 1 'C++' vào vị trí 1 => 'javascript','C++', 'Ruby';
console.log(language);

var languages9 = ['Java', '.NET', 'Javascript', 'PHP'];
console.log(languages9.splice(1, 3, 'Ruby'));// in ra số phần tử bị xóa
console.log(languages9); // in ra mảng sau cùng; ['Java', 'Ruby']


var languages9 = ['Java', '.NET', 'Javascript', 'PHP'];
languages9.splice(1, 0, 'Ruby');
console.log(languages9); // ['Java', 'Ruby', '.NET', 'Javascript', 'PHP']

var language2 = ['Javascript', 'PHP', 'C++'];
// language.splice()
console.log(language2);

// #8 concat: nối 2 mảng với nhau
console.log('============[8 concat]===========')
var language1 = ['Javascript', 'PHP', 'Ruby'];
var language2 = ['C++', 'C#', '.NET'];
console.log(language1.concat(language2));
console.log(language2.concat(language1));

//#9 slicing: cắt element của mảng
var language1 = ['Javascript', 'PHP', 'Ruby'];
console.log(language1.slice(1, 2));
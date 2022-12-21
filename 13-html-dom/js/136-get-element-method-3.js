/** Ôn tập lại các phương thức getElement trong DOM
 * 1.getElementById -> return element live
 * 2. getElementsByClassName
 * 3. getElementsByTagName
 * 4. querySelector -> return element live
 * 5. querySelectorAll
 * 
 * 6. HTML collection
 * 7. document.write
 */

// lấy ra element h2 đầu tiên
//cách 1
console.log(document.querySelector('h2')); // lấy ra element h2 đầu tiên 
console.log(document.querySelector('h2#heading-21')); // lấy ra element có id='heading-21'
// cách 2
console.log(document.getElementsByTagName('h2')[0]);

// lấy ra element h2 thứ 2
console.log(document.querySelectorAll('h2')[1]);
console.log(document.querySelector('h2#heading-22'));

console.log(document.querySelector('h2.heading-22'));// lấy h2 không có khối cha bao quanh
console.log(document.querySelector('h2.heading-22:nth-child(2)'));// lấy h2 có khối cha bao quanh
// note: chỉ class con nằm trong 1 khối cha thì mới dùng được child
console.log(document.querySelectorAll('h2')[2]);
console.log(
    document.querySelector('.heading-2:nth-child(2)')
);

// Lấy ra toàn bộ element h2
const headingsH3 = (document.querySelectorAll('h3'));
for (let i = 0; i < headingsH3.length; i++) {
    console.log(headingsH3[i]);
}
const headings_h3 = document.getElementsByTagName('h3');
for (let i = 0; i < headings_h3.length; i++) {
    console.log(headingsH3[i]);
}

// HTML collection
console.log(
    document.forms
);
var forms = document.forms;
var formLength = forms.length;
for (let i = 0; i < formLength; i++) {
    console.log(forms[i]);
}

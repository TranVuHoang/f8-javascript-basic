/**
 * for of
 * Lấy ra phần tử của mảng
 * lấy ra từng chữ cái của 1 chuỗi
 * 
 */

// TH1 mảng
var languages = [
    'Javascript',
    'PHP',
    'Java'
];
console.log(languages);
console.log(languages[0], languages[1], languages[2]);
for (var value of languages) {
    console.log(value);
}

// TH2 chuỗi
var language = 'Javascript';
for (var value of language) {
    console.log(value);
}

//TH3 Object
var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN'
};
console.log(Object.keys(myInfo));
for(var value of Object.keys(myInfo)) {
    console.log(value);
}
for(var value of Object.values(myInfo)) {
    console.log(value);
}
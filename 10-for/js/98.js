// for.. in: để lấy ra key or value của đối tượng

var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN'
};
for(var key in myInfo) {
    console.log(key);// name age address theo hàng dọc
    
}
for(var key in myInfo) {
    console.log(myInfo[key]);// Son Dang 18 HaNoi, VN theo hàng dọc
}
//ex2

var language = [
    'PHP',
    'Javascript',
    'Ruby'
];
// lấy key trong mảng language ra
for(var key in language) {
    console.log(key);// 0 1 2
};

// lấy key và value trong mảng language ra
for(var key in language) {
    console.log(key+': '+language[key]);// 0: PHP 1:javascript 2:Ruby
};

// ex3: duyệt qua chuỗi string
var myString = 'Javascript';
console.log(myString[0]);//J

for(var key in myString) {
    console.log(myString[key]);// J a v a s c r i p t
}




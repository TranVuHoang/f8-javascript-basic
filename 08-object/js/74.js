/**
 * 74. Object: lưu trữ thông tin của 1 đối tượng cụ thể
 * 
 */

// khởi tạo object myInfo
var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN'
};
console.log(myInfo);

// thêm cặp key-value vào object 
myInfo.email = 'fullstack.edu.vn';// thêm email:"fullstack.edu.vn"
console.log(myInfo);

myInfo['my-job'] = 'fullstack developer'; // thêm my-job:"fullstack developer"
console.log(myInfo);

console.log(myInfo.name);
console.log(myInfo['password']); //undefined vì k có password
console.log(myInfo['my-job']); //fullstack developer
console.log(myInfo.address); // Ha Noi, VN
console.log(myInfo['address']); // Ha Noi, VN

var nyInfo = { name: 'Son Dang', age: 18, address: "Ha Noi, VN" };
var myKey = 'address';
console.log(myInfo[myKey]);

// định nghĩa ra key mới bằng 1 biến
var emailKey = 'email';
var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
    [emailKey]: 'sodn@fullstack.edu.vn'
};
console.log(myInfo[emailKey]);

// xóa đi cặp key-value
delete myInfo.age; // xóa age
delete myInfo.address; // xóa address
console.log(myInfo);

// lưu trữ value là 1 function
var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
    [emailKey]: 'sodn@fullstack.edu.vn',
    getName: function () {
        return this.name;// this chính là biến myInfo
    }
};
// trong trường hợp key là 1 function -> ta gọi n là 1 phương thức
// -> phương thức(method): getName
// TH dữ liệu lấy ra trực tiếp -> ta gọi là thuộc tính
// -> thuộc tính(property): name, age, address
console.log(myInfo);
console.log(typeof myInfo.getName);
console.log(myInfo.getName());



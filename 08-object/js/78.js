/**
 * 78. Object Prototype - Basic
 * 
 * 1. Prototype là gì?: nguyên mẫu
 * 2. sử dụng khi nào?
 */

// tạo hàm khởi tạo User
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar=avatar;
    
    // phương thức getName được định nghĩa ngay trong hàm User
    this.getName = function() {
        return `${firstName} ${lastName}`;
    };
}
// add  thêm thuộc tính or phương thức vào User
//add phương thức className sai:
User.className = 'F8'; // undifined

// add phương thức className vào đúng:
User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
};

var user1 = new User('Son', 'Dang', 'Avatar 1');
var user2 = new User('Hoang', 'Tran', 'Avatar 2');
console.log(user1.className);
console.log(user2.getClassName());





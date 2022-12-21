/**
 * 76. Object constructor (khởi tạo(xây dựng) đối tượng)
 * 
 */

// hàm tạo, mô tả thiết kế của đối tượng
function User(firstName, lastname, avatar) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastname}`
    };
}

var author = new User('Son', 'Dang', 'Avatar'); // đối tượng user(author- giảng viên)
var user = new User('Hoang', 'Tran', 'Avatar'); // đối tượng user(user - học viên)

author.title = 'Chia sẻ học web tại F8';
user.comment = 'Khóa học F8 rất bổ ích ạ!';

console.log(author.constructor);
console.log(author.constructor === User);
console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());

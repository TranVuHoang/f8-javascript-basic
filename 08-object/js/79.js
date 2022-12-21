// Làm bài tại đây
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
    // phương thức getFullName được định nghĩa ngay trong hàm Student
    this.getFullName1 = function() {
        return `${firstName} ${lastName}`;
    };
}

// định nghĩa phương thức getFullName ở ngoài
Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student);
console.log(student.getFullName());  // 'Long Bui'
console.log(student.getFullName1());  // 'Long Bui'
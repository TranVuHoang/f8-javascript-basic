/**
 * Array methods: 
 *      // có tham số truyền vào là hàm
 *      1. foreach()
 *      2. every()
 *      3. some()
 *      4. find()
 *      5. fitter()
 *      6. map()
 *      7. reduce()
 * 
 */

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 0
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 900
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 500
    }
];
console.log(courses);

// duyệt qua mảng bên trong mảng là các object
courses.forEach(function (course, index) { // course: từng value (object) trong mảng, index là key của mảng
    console.log(index);
}); // call back: truyền tham số vào hàm

courses.forEach(function (course, index) { // course: từng value (object) trong mảng, index là key của mảng
    console.log(index, course);
}); // call back: truyền tham số vào hàm

// every() : kiểm tra 'tất cả' phần tử của mảng phải thỏa mãn 1 điều kiện nào đó
var isFree = courses.every(function (course, index) {
    // console.log(index);
    return course.coin === 0;
});
console.log(isFree);

// some(): kiểm tra các phần tử của mảng thỏa mãn 1 điều kiện nếu 1 trong các phần tử thỏa mãn -> true
var isFree = courses.some(function (course, index) {
    // console.log(index);
    return course.coin === 0;
});
console.log(isFree);

// find() tìm trong mảng ra duy nhất 1 đối tượng thỏa mãn đk cho trước
var result = courses.find(function(course, index) {
    return course.name === 'Ruby';
});

console.log(result);

// filter() tìm trong mảng và trả về tất cả đối tượng thỏa mãn điều kiện
var listCourse = courses.filter(function(course){
    return course.name == 'Ruby';
});
console.log(listCourse);



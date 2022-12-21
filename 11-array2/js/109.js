/**
 * map()
 * reduce()
 * 
 */

// map(): chỉnh sửa element của 1 array
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
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 600
    }
];

var newCourse = courses.map(function (course, index, originArray, originArray1) {
    return {
        id: course.id,
        name: "Khoa hoc " + course.name,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray, // trả về array gốc
        originArray1: courses // trả về array gốc
    };
});
console.log(courses);
console.log(newCourse);

var nameCourse = courses.map(function (course) {
    return `<h2> ${course.name} </h2>`;// trả về chuỗi
});
console.log(nameCourse);
console.log(nameCourse.join('\n'));

var nameCourse = courses.map(function (course) {
    return {
        name: course.name 
    };// trả về object
});
console.log(nameCourse);
// console.log(nameCourse.join(''));
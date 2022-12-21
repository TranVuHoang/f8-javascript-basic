/** 
 * Empty elements of array
 */

var courses = [
    'Javascript',
    'PHP'
]
console.log(courses);

courses.length = 10;
console.log(courses);

console.log('-------------Xuất mảng bằng vòng for thông thường---------------');
const lengthArr = courses.length;
for (let i = 0; i < lengthArr; i++) {
    console.log(courses[i]);
}
console.log('-----------xuất mảng bằng for -in----------');
for (const key in courses) {
    console.log(courses[key]);
}
console.log('----------------------------');
var courses = new Array(10); // length of courses = 10
console.log(courses);

var courses = new Array(10, 20);// length of courses = 2
console.log(courses);
courses.push('Javascript', 'PHP');
console.log(courses);

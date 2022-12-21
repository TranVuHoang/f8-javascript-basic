var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    return str.split(', ');
}

// Expected results
var result = strToArray(coursesStr)
console.log(result)

// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']
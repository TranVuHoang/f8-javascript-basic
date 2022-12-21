var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    let nodeUl = document.querySelector('ul');
    // console.log(nodeUl);
    let courseList = courses.map(function(course) {
        return `<li>${course}</li>`
    })
    // console.log(courseList.join('\n'));
    return nodeUl.innerHTML = courseList.join('\n')
}
// đối số là 1 mảng
render(courses);

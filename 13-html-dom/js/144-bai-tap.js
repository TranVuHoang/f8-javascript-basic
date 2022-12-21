function render(html) {
    return document.querySelector('ul').innerHTML = html;
}

// đối số là 1 template string
render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`)
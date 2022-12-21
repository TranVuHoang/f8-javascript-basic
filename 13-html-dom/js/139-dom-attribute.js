/**
 * DOM attribute
 * Cách thêm, sửa, xóa attriube vào element
 * 
 */
var headingElement =
    document.querySelector('h2');
console.log(headingElement);

// document.querySelector('h2').title = 'Heading1'

// thêm attribute: title = 'Heading2' vào trong element
headingElement.title = 'Heading2';

// thêm attribute: id = 'Heading2' vào trong element
headingElement.id = 'Heading2';

// thêm attribute: class = 'Heading2' vào trong element
headingElement.className = 'Heading2';

// thêm attribute: onclick ='onclick' vào trong element
headingElement.onclick = 'onclick';

// thêm attribute tùy ý vào 1 element bất kỳ -> dùng phương thức setAttribute
headingElement.setAttribute('class', 'heading');
headingElement.setAttribute('data-', 'test-data');
headingElement.setAttribute('href', 'heading');
headingElement.setAttribute('title', 'test-title');

// cách xuất ra giá trị của 1 attribute:
var headingTest = document.querySelector('.heading-test');
console.log(headingTest.getAttribute('class'));
console.log(headingTest.className);
console.log(headingElement.getAttribute('data-'));
console.log(headingElement.title);
console.log(headingElement.getAttribute('title'));
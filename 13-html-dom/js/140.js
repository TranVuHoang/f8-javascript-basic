/**
 * Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
 * Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
 * Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
 *Thêm thuộc tính target có giá trị "_blank" cho thẻ a.
 */
const heading1 = document.querySelector('h1');
heading1.title = 'F8 - Học lập trình để đi làm';
heading1.setAttribute('data-title', 'F8 - Học lập trình để đi làm');

const anchor = document.querySelector('a');
anchor.href = 'https://fullstack.edu.vn/';
anchor.target = '_blank';
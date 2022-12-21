/**
 * xử lý với TextNode trong DOM
 * - innerText, textContent, luôn tạo ra text, và không thể thêm thẻ html hoặc thêm attribute vào trong HTML DOM
 * innertText là thuộc tính nằm trên trên ElementNode
 * textCotent là thuộc tính tồn tại trên cả ElementNode và TextNode
 * - setter(thêm vào), getter(lấy ra)
 */

var headingElement = document.querySelector('h1');
console.log(headingElement);

// xuất ra nội dung bên trong textNode:
// Cách 1: in nội dung trong element tương ứng mà n hiện trên màn hình trình duyệt
console.log(headingElement.innerText); // trả lại giốn như những j ta nhìn thấy ở trình duyệt
// Cách 2: in ra tất nội dung trong element tương ứng trong file HTML
console.log(headingElement.textContent);// trả về nguyên bản textContent trong file HTML trog vsCode

// sửa nội dung bên trong textNode
// ex1: sửa nội dung bên trong thẻ h1
headingElement.innerText = 'New heading';
console.log(headingElement);
console.log(headingElement.textContent);
console.log(headingElement.innerText);

// headingElement.textContent = '<i>New Heading</i>';
headingElement.textContent = `

New Heading



`;
/** InnerHTML, OuterHTML property
 * Thêm element vào 1 element
 * 
 * innerHTML:
 *  thêm 1 elementNode vào trong 1 element,
 *  thêm 1 attributeNode vào trong 1 element,
 *  thêm 1 textNode vào trong 1 element
 * OuterHTML
 */
var boxElement = document.querySelector('.box');

//---------- xuất ra bằng getter---------------
// xuất ra nội dung bên trong của element
console.log(boxElement.innerHTML);

// xuất ra nội dung bên trong element được chọn lẫn cả element đó
console.log(boxElement.outerHTML);
//---------------------------------------------

//--------- xuất ra bằng setter----------------
// thêm 1 elementNode vào element
//setter
boxElement.outerHTML = '<span>Test</span>';
// xuất ra nội dung bên trong của element
// console.log(boxElement.innerHTML);

// xuất ra nội dung bên trong element được chọn lẫn cả element đó
console.log(boxElement.outerHTML);
console.log(boxElement);
console.log(boxElement.innerHTML);
console.log(boxElement.outerHTML);
//---------------------------------------------
// console.log(boxElement.querySelector('h1').innerText);


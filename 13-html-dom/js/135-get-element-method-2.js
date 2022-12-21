// Cách 1
console.log(document.querySelectorAll('.box-1 ul li'));

// Cách 2
// công việc 1: sử dụng đến 'boxNode'
var boxNode = document.querySelector('.box-1');

// công việc 2: sử dụng đến các li elements(là con của box-1)
console.log(boxNode.querySelectorAll('li'));

// -> viết gộp lại:
console.log(document.querySelector('.box-1').querySelectorAll('li'));
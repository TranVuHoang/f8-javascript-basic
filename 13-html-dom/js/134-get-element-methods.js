/**
 * Get element methods
 * 1. Element: id, class, tag, css selector, HTML collection
 *    - 1.id:        
 *      -> phương thức getElementById()
 *      -> select qua tên id của thẻ HTML
 *      -> return trực tiếp ra element(thẻ html) chứa id đó
 *    - 2.class:  
 *      -> phương thức getElementsByClassName() :class 
 *      -> select qua tên class của thẻ HTML
 *      -> return 1 mảng(HTMLCollection) -> cần dùng vòng lặp để truy xuất các phần tử trong mảng đó
 *    - 3.tagName:
 *      -> phương thức getElementsByTagName() : tag
 *      -> select qua tên thẻ HTML
 *      -> return 1 mảng(HTMLCollection-> cần dùng vòng lặp để truy xuất
 *    - 4.css selector      
 *      ->#1 document.querySelector('CSS selectors')
 *      -> select qua selector của css
 *      -> return trực tiếp ra element đầu tiên 
 *      
 *      ->#2 querySelectorAll()
 *      -> return 1 mảng (nodeList)
 * 
 *    -5. HTML collection
 *      -> document.anchors
 *      -> document.images
 *      -> document.forms
 *          ...
 *      -> 
 */
//1. phương thức getElementById: get ra id của thẻ HTML
const headingNode = document.getElementById('heading');
console.log(headingNode);// h1#heading

console.log({
    element: headingNode
});

//2. phương thức getElementsByClassName: get ra nhiều className -> return a array: HTML colleaction(1 mảng)
const headingNodes = document.getElementsByClassName('heading-2');
console.log(headingNodes); //return a array: HTML Collection HTMLCollection(3) [h2.heading-2, h2.heading-2, h2.heading-2]

//3. phương thức getElementsByTagName
console.log(
    document.getElementsByTagName('h2')
);
console.log(
    document.getElementsByTagName('p')
);
//4. Phuong thức querySelector
//#4.1 querySelector()
console.log(
    document.querySelector('#heading'),
);

console.log(
    document.querySelector('.heading-2')
);
console.log(
    document.querySelector('.box .heading-2')
);
console.log(
    document.querySelector('.box .heading-2:first-child')
);

console.log(
    document.querySelector('.box .heading-2:nth-child(2)')
);
//-> Note: chỉ có class mới dùng được: first-child or nth-child| còn id thì k dùng đc

//#4.2 querySlectorAll
console.log(
    document.querySelectorAll('.heading-2')
);

//phương thức document.form()
console.log(
    // xuất ra tất cả form
    document.forms
);
console.log(
    // xuất ra form đầu tiên
    document.forms[0]
);
console.log(
    // xuất ra form có id='form-1'
    document.forms['form-1'],
    document.forms.form2
);
console.log(
    document.forms.testForm
);
console.log(document.forms.formHai);

// HTML collection
console.log(document.anchors);//'b'
console.log(document.images);
/**
 * var number1 = 9;
 * console.log(number1);
 * 
 */
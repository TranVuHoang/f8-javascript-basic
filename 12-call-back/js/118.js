/** Call back? (gọi lại)
 * Là hàm(function) được truyền qua đối số khi gọi lại hàm
 * 
 * 1. là hàm
 * 2. Được truyền qua đối số
 * 3. định nghĩa ra 1 function và 
 *    được định nghĩa qua đối số của 1 function khác
 */

// hàm bình thường chưa có call back
function myFunction(param) {
    return result = (typeof param); // return a string: number(vì đối số truyền vào: 123 => typeof 123 -> number)
}
console.log(myFunction(123));


//--------------------ex2--------------------
function myFunction1(param) {
    param('value');
}
function myCallBack1(value) {
    // console.log('value:', value);   
}
// myFunction1(myCallBack1); // gọi hàm myFunction có đối số truyền vào là 1 function
console.log(myFunction1(myCallBack1));
//--------------------end-ex2------------------



//------------ex1-------------------
function myFunction1(param) {
    if (typeof param === 'function') { //kiểm tra xem đối số param có phải là 1 function không thì mới thực thi
        param('Học lập trình');
    }
}
myFunction1(1);// truyền callBack: 1 -> k phải function -> lỗi
myFunction1(myCallBack1);// truyền callBack: 1 -> k phải function -> lỗi
//--------------end-ex2-------------

//-------------Ex4------------------
function myCallBack1(value) {
    console.log('value: ' + value);
}
function myFunction1(param) {
    if (typeof param === 'function') { //kiểm tra xem đối số param có phải là 1 function không thì mới thực thi
        param('Học lập trình');
    }
}
//--------------end-ex1-------------


//--------------ex3------------
function sum(a, b) {
    return a + b;
} 
function average(a, b, fn) {
    var toTal = fn(a, b);
    return toTal / 2;
}
console.log('result of average: ', average(1, 2, sum));
// average(1, 2, sum);

// --------------ex--------------
function sumCallBack(value) {
    return value;
}
function average1(param1) {
    param1('Hello');
}
average1(sumCallBack);

//-------------- ex original---------
function myCallBack2(value) {
    console.log('value:', value);
}
function myFn(functionX) {
    functionX('Hello world');
}
myFn(myCallBack2);

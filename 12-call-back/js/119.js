/** Bài tập về callBack function
 * 
 */
const sUm = function(a, b) {
    return a + b
}
function sumCb(a, b) {
    return a + b;
}
console.log(typeof sumCb);
function subCb(a, b) {
    return a - b;
}
function multiCb(a, b) {
    return a * b;
}
function divCb(a, b) {
    return a / b;
}
function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
console.log(caculate(1, 2, sumCb)); // Output: 3
console.log(caculate(1, 2, subCb)); // Output: -1
console.log(caculate(1, 2, multiCb)); // Output: 2
console.log(caculate(3, 1, divCb)); // Output: 3


console.log('OK');
const sum = (a, b) => a + b;
console.log(typeof sum);
console.log(caculate(1, 2, sum));
//Truthy - to bool is true

//1. truthy
console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true

console.log(!!'hi') // true

// Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.
console.log(!!1) // true
console.log(!!'f8') // true
console.log(!!['Mercedes']) // true


//2. falsy
/**
    1 false
    2 0 (số không)
    3 '' or "" (chuỗi rỗng)
    4 null
    5 undefined
    6 NaN
 */

console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false


var car1 = '0', car2 = 0;
console.log(Boolean(car1));
console.log(Boolean(car2));
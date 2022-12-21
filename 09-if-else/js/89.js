// toán tử 3 ngôi - ternary operator

var course = {
    name: 'Javascript',
    coin: 250
}
if (course.coin > 0) {
    console.log(`${course.coin} Coins`);
} else {
    console.log('Miễn phí');
}

// toán tử 3 ngôi

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);

// ex2

var a = 1, b = 2, c = a > 0 ? a : b;
console.log(c);
/**
 * Vòng lặp do - while
 * 
 */

// in ra số tăng dần  1-> 10 bằng vòng lặp do while
var i = 0;
do {
    i++
    console.log(i);
} while (i < 10);

var i = 0;
do {
    i++
    console.log(i);
} while (i < 0); // vẫn chạy ra kq 1 lần

// in ra dãy số giảm dần từ 10-0 bằng vòng lặp do-while
var i = 10;
do {
    console.log(i);
    i--;
} while (i > 0);

//ex3 
var isSuccess = false, i = 0;
do {
    i++;
    console.log('Nạp thẻ lần ' + i);
    // thành công
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i < 3);
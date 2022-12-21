// vòng for

// cách 1
for (var i = 1; i <= 1000; i++)
    console.log(i);
//cách 2
var i = 1;
for (; i <= 10; i++)
    console.log(i);

/**
 * vòng lặp vô hạn có thể dẫn đến treo trình duyệt
 * // TH1
    for (; ; i++) {
        console.log(i);
    }

    //TH2
    for(;i>0; i++) {
        console.log(i);
    }

    //TH3
    for(;true;i++) {
        console.log(i);
    }
 */


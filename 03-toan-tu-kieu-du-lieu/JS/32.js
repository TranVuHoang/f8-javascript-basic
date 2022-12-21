/**
 * Toán tử logic
 * 1 && - and
 * 2 || - or
 * 3 ! - nor
 */

var a = 1, b = 2, c = 3;

//1. toán tử and
if (a<0 && b>0 && c>0) {
    console.log("Điều kiện đúng");
}

//2. toán tử or
if (a>0 || b<0 || c<0) {
    console.log("Điều kiện đúng");
}

//3. toán tử nor
if(!(a<0)) {
    console.log("Điều kiện đúng");
}
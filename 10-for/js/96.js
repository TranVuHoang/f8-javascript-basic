// for loop tạo mảng 1 chiều

var myArray = ['Javascript', 'PHP', 'Java', 'Ruby'];
console.log(myArray[0], myArray[1], myArray[2]);

// xuất từng phần tử của mảng 
var arrayLength = myArray.length; // lấy độ dài của mảng(chỉ cần lấy 1 lần thì khi dùng vòng for sẽ k cần tính lại độ dài của mảng) 
for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]+" ");
}
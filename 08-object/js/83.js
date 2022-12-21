// 83.Lấy ngẫu nhiên phần tử của mảng
function getRandomItem() {
    var random = Math.floor(Math.random() * 5);
    var gift = [
        'HTML',
        'CSS',
        'Javascript',
        'PHP',
        'React JS'
    ];
    return gift[random];
};
console.log(getRandomItem());

// function getRandomItem2(array) {
//     var array = [];
//     arrayLength = array.length;
//     var random = Math.floor(Math.random() *  arrayLength);
//     return array[random]; 
// };
// console.log(getRandomItem2());

var arr1 = [1,2];


function getRandomItem2(arr1)
{
    var random = Math.floor(Math.random()) * arr1;
    console.log(random);
    return  random[random];
}
console.log(getRandomItem2());


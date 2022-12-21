const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
console.log(sports);

// var sport = sports.filter(function (sport) {
//     return sport.like > 5;
// });
// console.log(sport);
function getMostFavoriteSport() { // hàm này sẽ <=> với đoạn code được comment ở bên trên
    var sport = sports.filter(function (sport) {
        return sport.like > 5;
    });
    return sport;
};
// Kỳ vọng
console.log(getMostFavoriteSport(sports))
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]






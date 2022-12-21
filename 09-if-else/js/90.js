// Làm bài
function getCanVoteMessage(age) {
    var result = (age >= 18) ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
    return result;
}

// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'
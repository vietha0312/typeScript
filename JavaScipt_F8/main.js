var courses = [
    {
        id: 1,
        name: "JavaScript",
        coin: 20
    },
    {
        id: 2,
        name: "Ruby",
        coin: 123
    },
    {
        id: 3,
        name: "React",
        coin: 10
    }
]
// duyệt phần từ của mảng
// const course = courses.filter(function (course, index) {
//     return course.coin === 0
// });

// console.log(course)
//every kiểm tra từ đầu ,nếu không thỏa mãn điều kiện trả về false
// some chỉ cần có một điều kiện thỏa mãn ,trả về true (ngược lại so với every)


// var newCourses = courses.map((item, index) => {
//     return {
//         id: item.id,
//         name: `Khoa hoc :${item.name}`,
//         coin: item.coin,
//         coinText: `Gia:${item.coin}`,
//         index: index,
//     }
// })
// console.log(newCourses)

// const totalCoin = courses.reduce((accumulator, currentValue) =>
//     accumulator + currentValue.coin, 0
// )

// console.log(totalCoin)



// var totalCoin = 0;
// for (var course of courses) {
//     totalCoin += course.coin;
// }

// console.log(totalCoin)
// accumulator: biến luu trữ
// currentValue: giá trị hiện tại

var i = 0
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumulator + currentValue.coin
    console.table({
        'lượt chạy': i,
        'biên tích trữ': accumulator,
        'giá khóa jock': currentValue.coin,
        'tích trữ  được': total
    });
    console.log(currentValue)
    return total;
}



var totalCoin = courses.reduce(coinHandler, 0)// initialValue 
console.log('tổng:', totalCoin)

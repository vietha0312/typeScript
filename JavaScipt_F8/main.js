var courses = [
    {
        id: 1,
        name: "JavaScript",
        coin: 0
    },
    {
        id: 2,
        name: "Ruby",
        coin: 1
    },
    {
        id: 3,
        name: "React",
        coin: 0
    }
]
// duyệt phần từ của mảng
// const course = courses.filter(function (course, index) {
//     return course.coin === 0
// });

// console.log(course)
//every kiểm tra từ đầu ,nếu không thỏa mãn điều kiện trả về false
// some chỉ cần có một điều kiện thỏa mãn ,trả về true (ngược lại so với every)


var newCourses = courses.map((item, index) => {
    return {
        id: item.id,
        name: `Khoa hoc :${item.name}`,
        coin: item.coin,
        coinText: `Gia:${item.coin}`,
        index: index,
    }
})
console.log(newCourses)



var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]


// function getTotalGold(sports) {
//     return sports.reduce((total, sport) =>
//         total += sport.gold, 0
//     )
// }
// // Expected results:
// console.log(getTotalGold(sports))



function getTotalGold(arr) {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.gold
    }, 0);
}

console.log(getTotalGold(sports))

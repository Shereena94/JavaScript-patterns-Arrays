//Create a nested array and access all elements by using for in loop

let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i in nestedArray) {
    for (let j in nestedArray[i]) {
        console.log(nestedArray[i][j]);         
        }
}
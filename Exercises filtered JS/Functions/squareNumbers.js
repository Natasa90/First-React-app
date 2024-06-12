// Example 1: Squaring Each Element in an Array
// Write a function that takes an array of numbers and //returns a new array with each element squared.



function squareArray(arr) {
    let squaredArray = [];
    for (num of arr) { 
        squaredArray.push(num * num);
    }
    return squaredArray; 
}

console.log(squareArray([1, 2, 3, 4, 5])); // Output: [1, 4, 9, 16, 25]\


// IN IS FOR INDEX , OF IS FOR VALUE !!!!!!!
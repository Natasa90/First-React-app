let numbers = [1, 2, 3, 4, 5];
let replacement = ['a', 'b', 'c'];

numbers.splice(0,1,replacement[0]);
console.log (numbers);

numbers.splice(4,1,...replacement[1],replacement[2]);
console.log(numbers);
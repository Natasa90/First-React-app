const person = {
    name: "John Doe",
    age: 30,
    country: "USA"
};

// OUTPUT: 
//["name", "age", "country"]

let arrayOfValues = [];

for (key in person){ 
    arrayOfValues.push(key);
}
console.log(arrayOfValues);
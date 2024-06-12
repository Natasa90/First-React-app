const records = [
    { id: 1, name: "John", age: 25, occupation: "Developer" },
    { id: 2, name: "Jane", age: 28, occupation: "Designer" },
    { id: 1, name: "John", age: 25, occupation: "Manager" }
];

/*
[
    { id: 1, name: "John", age: 25, occupation: ["Developer", "Manager"] },
    { id: 2, name: "Jane", age: 28, occupation: "Designer" }
]*/

let mergeObject = []; 
let mergedArray = [];

for (i in records){ 
     const record = records[i]; 

    if (mergeObject[record.id] === undefined){
        mergeObject[record.id] = {...record, occupation: [record.occupation]};
     
    } else {
        mergeObject[record.id].occupation.push(record.occupation)
    
    }
}
for (key in mergeObject){ 
    mergedArray.push(mergeObject[key]);
}

console.log(mergedArray);


/*const students = [
    { name: "John Doe", grade: "A" },
    { name: "Jane Smith", grade: "B" },
    { name: "Emily Jones", grade: "A" },
    { name: "William Brown", grade: "C" },
    { name: "Grace Davis", grade: "B" }
];*/

const grades = {
    A: ["John Doe", "Emily Jones"],
    B: ["Jane Smith", "Grace Davis"],
    C: ["William Brown"]
}
let students = [];

for (key in grades){ 
    for (i in grades[key]){
        students.push({name: grades[key][i], grade: key});
    }
}
console.log(students);



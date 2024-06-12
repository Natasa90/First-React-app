let objectNew = {
    name: "Natasa",
    lastName: "Stefanovic", 
    test: ["Milutin", "Zach", "Marko", "Milena", "Valentina"]
}; 

for (let key in objectNew){
    if (Array.isArray(objectNew[key])){
        objectNew[key].forEach(value => console.log(key, ":", value));
    } else {
        console.log(key, ":", objectNew[key]);
    }
}
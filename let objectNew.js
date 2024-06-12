let objectNew = {
    name: "Natasa",
    lastName: "Stefanovic", 
    test: ["Milutin", "Zach", "Marko", "Milena", "Valentina"]
}; 

for (let key in objectNew){
    if (typeof key[value] === Array){
        console.log(key, objectNew["test"][key]);
    }
}
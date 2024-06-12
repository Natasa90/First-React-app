let fruits = ["Apples", "Bananas", "Cheries"]; 

// pristupanje elementu preko indexa:
console.log(fruits[0]);

//dodavanje elementa na kraj niza: 
fruits.push("Oranges");
console.log(fruits);

//dodavanje elementa na pocetak niza: 
fruits.unshift("Mangos");
console.log(fruits);

//uklanjanje poslednjeg elementa iz niza: 
fruits.pop();
console.log(fruits);

//uklanjanje prvog elementa iz niza:
fruits.shift();
console.log(fruits);

//promena neke vrednosti na odredjenom indexu: 
fruits[0] = "Papaya"; 
console.log(fruits);

//iteracija kroz niz pomocu FOR loop-a: 
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//iteracija kroz niz pomocu forEach metode, koja pokazuje vrednost, i na kojoj index poziciji se nalazi:
fruits.forEach(function (item,index) {
    console.log(item,index);
});

//multidimenzionalni niz (matrica): 
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
 


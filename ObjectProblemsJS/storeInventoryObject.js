// Find sum of prices of fruits, vegetables and beverages, separately

let storeInventory = {
    "fruits": {"apples": 50, "bananas": 30, "oranges": 25},
    "vegetables": {"carrots": 20, "lettuce": 10},
    "beverages": {"water": 100, "soda": 50}
};

let priceOfFruits = 0; 
let priceOfVegetables = 0; 
 let priceOfBeverages = 0;


for (key in storeInventory){ 
    for (i in storeInventory[key]){
            if (typeof storeInventory[key][i] === ""){
                priceOfFruits += (i);
            }
    }
}
console.log(priceOfFruits);



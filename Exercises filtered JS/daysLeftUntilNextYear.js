let currentDay = new Date(); 
let year = currentDay.getFullYear(); 
let lastDate = new Date (currentDay.getFullYear(), 11, 31);

let miliSecondsLeft = lastDate - currentDay

let daysLeft = Math.ceil(miliSecondsLeft/ (1000*3600*24)); 
console.log(daysLeft);
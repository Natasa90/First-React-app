function myFunction() {
    var localVariable = "I'm in local scope";
    console.log(localVariable);
  }
  
  myFunction();
  console.log(localVariable);



  

  if (true) {
    let blockVariable = "I'm in block scope";
    console.log(blockVariable);
}

console.log(blockVariable);
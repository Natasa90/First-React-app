function testScope() {
    var x = 1;
    if (true) {
      var x = 2; // same variable!
      console.log(x); // 2
    }
    console.log(x); // What will this output?
}
  testScope();

function example() {
    if (true) {
      let y = 5;
      console.log(y); // Outputs?
    }
    console.log(y); // Outputs?
  }
  example();
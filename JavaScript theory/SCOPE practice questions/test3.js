function count() {
    for (var i = 0; i < 3; i++) {
      var i = i * i; //- output is 5
      //let i = 0;
      //i = i++; //- output is 3
    }
    console.log(i); // Outputs?
  }
  count();
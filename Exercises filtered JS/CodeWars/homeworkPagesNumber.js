const reverseSeq = n => {
    let result = []; 
    for (i = n; i > 0; i--){
        result.push(i);
    }
    return result;
  };

  console.log(reverseSeq(5)); 
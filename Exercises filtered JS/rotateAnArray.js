function rotateAnArray (array, k) {
    array = array.concat(array.splice(0,k));
    return array;
    } 

    console.log (rotateAnArray([1,2,3,4,5,6], 3))

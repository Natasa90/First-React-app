// Function to generate a 2D matrix with row and column numbers
function print2DMatrix(rows, columns) {
    for (let i = 1; i <= rows; i++) { 
        let row = "";
        for (let j = 1; j <= columns; j++){ 
            row += "(" + i + "," + j + ")"; 
        }
       console.log(row);
    }
}


print2DMatrix(5, 5);

/*(1,1) (1,2) (1,3) (1,4) (1,5) 
(2,1) (2,2) (2,3) (2,4) (2,5) 
(3,1) (3,2) (3,3) (3,4) (3,5) 
(4,1) (4,2) (4,3) (4,4) (4,5) 
(5,1) (5,2) (5,3) (5,4) (5,5) */
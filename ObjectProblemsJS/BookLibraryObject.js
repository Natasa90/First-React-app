//first hard code all the values from the objects + loop after

const library = {
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 }
    ]
};

let libraryObject = library.books 

for (let i = 0; i < libraryObject.length; i++){
    
    for (key in libraryObject[i]){ 
        console.log(libraryObject[i][key]);
    }
}
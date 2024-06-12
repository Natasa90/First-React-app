let books =  [
    {image: "images/img1.webp", title: "Swan Song", author:"by Elin Hilderbrand"}, 
    {image: "images/img2.webp", title: "Onix Storm", author:"by Rebecca Yarros"}, 
    {image: "images/img3.webp", title: "Not in Love", author:"by Ali Hazelwood"},
    {image: "images/img4.webp", title: "Learher & Lark", author:"by Brynne Weaver"},
    {image: "images/img5.webp", title: "Reckless", author:"by Lauren Roberts"},
    {image: "images/img6.webp", title: "Good Energy", author:"by Casey Means MD"},
    {image: "images/img7.webp", title: "Zodiac Academy", author:"by Caroline Peckham"},
    {image: "images/img8.webp", title: "The Women", author:"by Kristin Hannah"},
    {image: "images/img9.webp", title: "Murdle", author:"by G. T. Karber"},
    {image: "images/img10.webp", title: "Skyshade", author:"by Alex Aster"},
    {image: "images/img11.webp", title: "You Like It Darker", author:"by Stephen King"},
    {image: "images/img12.webp", title: "Let's Find Pokemon", author:"by Kazunori Aihara"}, 
    {image: "images/img13.webp", title: "Eruption", author:"by Michael Crichton"},
    {image: "images/img14.webp", title: "Misfits", author:"by Lisa Yee"},
    {image: "images/img15.webp", title: "i live inside a while", author:"by Xin Li"},
    {image: "images/img16.webp", title: "Shameless", author:"by Brian Tyler Cohen"},
    {image: "images/img17.webp", title: "Haunting Adeline", author:"by H. D. Carlton"},
    {image: "images/img18.webp", title: "A Demon of Unrest", author:"by Erik Larson"},
    {image: "images/img19.webp", title: "Bits and Pieces", author:"by Whoopi Goldberg"},
    {image: "images/img20.webp", title: "An Offer from a Gentleman", author:"by Julia Quinn"},
    {image: "images/img21.webp", title: "Powerful", author:"by Lauren Roberts"}
  ];

  // delete an author "Kristin Hannah":
 for (let index in books) { 
    if (books[index].author.includes("Kristin Hannah")){
        delete books[index].author
        break;
    }
}

// update image in object with author "Kristin Hannah": 

for (let index in books) { 
    if (books[index].author.includes("Kristin Hannah")){
        books[index].image = "test"; 
        break;
    }
}
 
console.log(books); 

// update image and author in object with title "I live inside a while": 

for (let index in books) { 
    if (books[index].title.includes("I live inside a while")){
        books[index].image = "test"; 
        books[index].author = "test2"
        break;
    }
}
 
console.log(books); 
  
// add id key and a value to every object in an array: 

for (let index in books) {
    books[index].author.replace("by", ""); 
}
console.log(books);
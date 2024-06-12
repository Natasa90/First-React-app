let form = document.getElementById("formOne");

form.addEventListener("submit", (e) => { 
    e.preventDefault();

    const fullName = document.getElementById("fullName").value; 
    const email = document.getElementById("email").value; 
    const checkBox1 = document.getElementsByName("yes").checked;
    const checkBox2 = document.getElementsByName("no").checked;
    let outputArea = document.getElementById("outputTextArea");

    let output = fullName + "<br>";
    output += email + "<br>";
    output += checkBox1 + "<br>"; 
    output += checkBox2;
    outputArea.innerHTML = output; 

})

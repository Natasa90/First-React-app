function correctAnswer () {
    const options = document.getElementsByName("q4");
    for (let i = 0; i <= options.length; i++){
        if (options[i].checked) {
        alert = options[i].value; 
        }
    }
}


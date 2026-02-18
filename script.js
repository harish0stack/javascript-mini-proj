function check() {
    let n = document.getElementById("number").value;
    let m = document.getElementById("message");

    if (n === "") {
        m.innerText = "";
        return;
    }
    let numValue = Number(n);

    // console.log(isNaN(numValue));

    if (isNaN(numValue)) {
        m.innerText = "Please enter a valid number";
        m.style.color = "orange"; 
        return; 
    }
    
    
    m.innerText = (numValue % 2 === 0)? "Even" : "Odd";
    m.style.color = (numValue % 2 === 0) ? "#4caf50" : "#f44336";
}
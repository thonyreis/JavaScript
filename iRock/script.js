function touchRock() {
    var userName = prompt("Qual seu nome?", "Enter your name here.");
    if (userName) {
        alert("Prazer em conhecer você, " + userName + ".");
        document.getElementById("rockImg").src = "rock_happy.png";
    }
}
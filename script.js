const greet = require("./greeting");

function hello() {
  alert(greet());
}

document.getElementById("main-btn").addEventListener("click", hello);



let btn = document.getElementById("btn");
let prefix = document.getElementById("prefix");
let code = document.getElementById("code");

btn.addEventListener("click", () => {
    let randomColor = "#" + Math.floor(Math.random() * 0x1000000).toString(16).toUpperCase();
    prefix.innerText = "Hex Code: ";
    code.style.color = "#00b2e1";
    code.innerText = randomColor;
    document.body.style.backgroundColor = randomColor;
})
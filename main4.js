
let numero1 = 0;
let numero2 = 0;

function suma () {
    numero1 = parseInt(document.getElementById("num1").value);
    numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 + numero2;
    document.querySelector(".resultado").innerHTML = `${resultado}`
}
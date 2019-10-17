function mayorNum() {
var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value);

if (num1 >= num2) {
    if (num1 == num2) {
        alert("Los numeros son iguales")
    } else {
        alert("num1 es mayor")
    }
    } else {
        alert("num2 es mayor")
    }
}
window.addEventListener("load",init);

let number1 = "";
let number2 = "";
let operador = "";
let result;

function init(e) {
    //CAPTURANDO VALOR DE LOS NUMEROS 
    //document.querySelector(".keys :input")
    $(".keys :input").click(function() {
        indentificarComando($(this).attr("value"));
    });

    document.querySelector('.screen').innerHTML = "0";
}


function indentificarComando(valor) {
    if (valor === "C") {
        LimpiarPantalla();
    }
    else if (valor === "DEL") {
        LimpiarUltimaPosicion();
    }
    else if (valor === "%" || valor === "+" || valor === "-" || valor === "x" || valor === "÷") {
        Operaciones(valor);
    }
    else if (valor === "=") {
        resultado();
    }
    else {
        desplegarValorPantalla(valor);
    }
}

function desplegarValorPantalla(numero) {
    if (numero !== "." && document.querySelector('.screen').innerHTML === "0") document.querySelector('.screen').innerHTML = "";
    
    if (operador == "") {
        number1 += numero;
    }
    else {
        number2 += numero;
    };
    document.querySelector('.screen').innerHTML += numero;
}

//GET OPERADORES
function Operaciones(oper) {
    operador = oper;
    console.log(operador);
    document.querySelector('.screen').innerHTML ="";
}

//SET RESULTADO
function resultado() {
    switch (operador) {
        case "÷":
            result = parseFloat(number1) / parseFloat(number2);
            break;
        case "+":
            result = parseFloat(number1) + parseFloat(number2);
            break;

        case "-":
            result = parseFloat(number1) - parseFloat(number2);
            break;

        case "x":
            result = parseFloat(number1) * parseFloat(number2);
            break;
        case "%":
            result = parseFloat(number1) % parseFloat(number2);
            break;
    }
    document.querySelector('.screen').innerHTML = result;
    number1 = result;
    number2 = 0;
    operador = "";
}

//LIMPIAR VALOR
function LimpiarPantalla() {
   number1 = 0;
   number2 = 0;
   operador = "";
   document.querySelector('.screen').innerHTML = "0";
}

function LimpiarUltimaPosicion() {
    let cantDigitos = $('.screen').text().length;
    let removiendoDigito = $('.screen').text().substring(0, $('.screen').text().length - 1);
    document.querySelector('.screen').innerHTML = removiendoDigito;

    if (number2.length == 0) {
        number1 = removiendoDigito;
    }
    else {
        number2 = removiendoDigito;
    }      
}
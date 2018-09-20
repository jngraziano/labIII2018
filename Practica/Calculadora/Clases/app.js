"use strict";
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
var arrayOperaciones;
var flag = 0;
function manejadorEventos() {
    // let btnHistorial = document.getElementById("btnHistorial");
    // btnHistorial.addEventListener("click", (e:Event) => this.btnHistorial()        
    // );
}
window.onload = function () {
    arrayOperaciones = [];
};
// BOTONES
function btnHisto() {
    //HARDCODEADO:
    // var listaCuentas = [unaOpe,dosOpe];
    // let unaOpe = new Clases.Operaciones(2,4,0);
    // let dosOpe = new Clases.Operaciones(10,5,2);
    var divTabla = document.getElementById("tablaHistorica");
    var cuerpo = document.getElementById("tCuerpo");
    if (divTabla.hidden != null) {
        divTabla.hidden = false;
        cuerpo.innerHTML = null;
        for (var i = 0; i < arrayOperaciones.length; i++) {
            cuerpo.innerHTML += "<tr><td scope='row'>" + arrayOperaciones[i].num1 + "</td>" +
                "<td scope='row'>" + arrayOperaciones[i].num2 + "</td>" +
                "<td scope='row'>" + arrayOperaciones[i].op + "</td>" +
                "<td scope='row'>" + arrayOperaciones[i].resultado + "</td></tr>";
        }
    }
}
function btnCerrar() {
    var divTabla = document.getElementById("tablaHistorica");
    divTabla.hidden = true;
}
function btnResultado() {
    //TOMO NUM1 y NUM2 de los input del HTML
    var num1 = Number($('#txtNum1').val());
    var num2 = Number($('#txtNum2').val());
    // if (num2 == 0) {
    //     document.getElementById("txtNum1").className="error";
    //     document.getElementById("txtNum2").className="error";
    // }
    //TOMO el numero elegido en el select 
    var opera = document.getElementById("tipoOperador").value;
    //Tomo el label del html
    var txtResult = $("#txtResultado");
    //CREO UN OBJETO DE TIPO OPERACIONES y le paso las variables.
    var unaOperacion = new Clases.Operaciones(num1, num2, opera);
    if (num1 == 0 || num2 == 0) {
        document.getElementById("txtNum1").className = "error";
        document.getElementById("txtNum2").className = "error";
        txtResult.empty().append("Debe completar los campos.");
    }
    else if (unaOperacion.flag == 2) {
        document.getElementById("txtNum2").className = "error";
        txtResult.empty().append("Math error.");
    }
    else {
        // this.arrayOperaciones.push(unaOperacion);
        document.getElementById("txtNum1").className = "exito";
        document.getElementById("txtNum2").className = "exito";
        arrayOperaciones.push(unaOperacion);
        //Primero limpio el label y luego reemplazo por el texto.
        txtResult.empty().append("El resultado de " + unaOperacion.num1 + unaOperacion.op + unaOperacion.num2 + " es: " + unaOperacion.resultado);
        flag = 1;
    }
}
function miInfo() {
    alert("Calculadora\n" + "Alumno: Julian Graziano" + "\n" + "Division: 3 D");
}

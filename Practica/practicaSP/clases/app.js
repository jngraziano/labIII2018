"use strict";
var practicaSP;
(function (practicaSP) {
    $(document).ready(function () {
        $("#addPopup").click(function () {
            // $("#divOculto1").show(1000);
            $("#divOculto1").css("visibility", "visible");
        });
        $("#btnCerrar").click(function () {
            $("#divOculto1").css("visibility", "hidden");
        });
        $("#radGatoA").on("click", function () {
            $("#radPerroA").prop("checked", false);
        });
        $("#radPerroA").on("click", function () {
            $("#radGatoA").prop("checked", false);
        });
        $("#btnAgregar").click(function () {
            //$("btn");
            // window.location.href="./index2.html"; //Tomo otro html
            var nombreA = String($("#nombreA").val());
            var patasA = Number($("#patasA").val());
            var radGatoA = $("#radGatoA").prop("checked");
            var radPerroA = $("#radPerroA").prop("checked");
            var animales = new Array();
            if (radGatoA) {
                var unGato = new practicaSP.gato(nombreA, patasA);
                animales.push(unGato);
            }
            else if (radPerroA) {
                var unPerro = new practicaSP.perro(nombreA, patasA);
                animales.push(unPerro);
            }
            //    animales.forEach(Programa.hablar);
            var jsonAnimales = JSON.stringify(animales);
            localStorage.setItem("key", jsonAnimales);
            //    let unJson = JSON.parse(localStorage.getItem("key")); //me dijo el profesor
            //    alert(unJson[0]);
            alert(localStorage.getItem("key"));
        });
    }); //fin document.ready
})(practicaSP || (practicaSP = {}));

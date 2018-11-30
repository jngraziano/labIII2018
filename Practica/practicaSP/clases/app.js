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
        $("#btnLimpia").click(function () {
            localStorage.clear();
            location.reload();
        });
        mostrarAnimales();
        $("#radGatoA").on("click", function () {
            $("#radPerroA").prop("checked", false);
        });
        $("#radPerroA").on("click", function () {
            $("#radGatoA").prop("checked", false);
        });
        $("#btnAgregar").click(function () {
            // window.location.href="./index2.html"; //Tomo otro html
            var nombreA = String($("#nombreA").val());
            var sondioA = String($("#sondioA").val());
            var radGatoA = $("#radGatoA").prop("checked");
            var radPerroA = $("#radPerroA").prop("checked");
            var radPajaroA = $("#radPajaroA").prop("checked");
            var animalesLista = JSON.parse(localStorage.getItem("Localanimal") || "[]");
            // let animales:Array<animal> = new Array<animal>();
            // let animales:JSON;
            if (radGatoA) {
                var unGato = new practicaSP.gato(nombreA, sondioA);
                animalesLista.push(JSON.stringify(unGato));
            }
            else if (radPerroA) {
                var unPerro = new practicaSP.perro(nombreA, sondioA);
                animalesLista.push(JSON.stringify(unPerro));
            }
            else {
                var unPajaro = new practicaSP.pajaro(nombreA, sondioA);
                animalesLista.push(JSON.stringify(unPajaro));
            }
            //    animales.forEach(Programa.hablar);
            var stringAnimalesLista = JSON.stringify(animalesLista);
            localStorage.setItem("Localanimal", stringAnimalesLista);
            location.reload();
            //    let unJson = JSON.parse(localStorage.getItem("animales")); //me dijo el profesor
            //    alert(unJson[0]);
            //    alert(localStorage.getItem("animales"));
        });
    }); //fin document.ready
    function mostrarAnimales() {
        var animalesStorage = JSON.parse(localStorage.getItem("Localanimal") || "[]");
        // let stringFinal = animalesString
        //                         .filter(function(empleado){
        //                             let empleadoRet = JSON.parse(empleado);
        //                             return empleadoRet._tipo == valor;
        //                         })
        //                         .map(function(empleado){
        //                             let empleadoRet = JSON.parse(empleado);
        //                             return empleadoRet;
        //                         });   
        // EmpleadosString= stringFinal;
        var tBodyTable = $('#tBodyTable')[0];
        var seccionPersonas = "";
        for (var i = 0; i < animalesStorage.length; i++) {
            var animalActual = JSON.parse(animalesStorage[i]);
            seccionPersonas += "<tr>       <td>" + animalActual.nombre + "</td>" +
                "<td>" + animalActual.cantPatas + "</td>" +
                "<td>" + animalActual.tipo + "</td>" +
                "<td>" + animalActual.ruido + "</td>" +
                //   "<td>" +      personasCompleto[i].apellido + "</td>" +
                //   "<td>" +      personasCompleto[i].fecha    + "</td>" +
                //   "<td>" +      personasCompleto[i].sexo     + "</td>"+
                //   "<td>" + "<img src='"+ personasCompleto[i].foto + "'id='imgMuestro' height='80'>"+
                //   "<input type='file' "+" hidden>"+"</td>"+
                "<td>" + "<button class='btn btn-outline-warning' id='btnModif'>Modificar" + "<i class='fa fa-folder'></i>" + "</button>" +
                "<button class='btn btn-outline-danger ' id='btnEliminar'>Eliminar" + "<i class='fa fa-trash'></i></button></td>" +
                "</tr>";
            tBodyTable.innerHTML = seccionPersonas;
        }
    }
})(practicaSP || (practicaSP = {}));

"use strict";
var practicaSP;
(function (practicaSP) {
    var usuarioID;
    $(document).ready(function () {
        $("#addPopup").click(function () {
            // $("#divOculto1").show(1000);
            $("#btnModificar").css("visibility", "hidden");
            $("#btnEliminar").css("visibility", "hidden");
            $("#btnAgregar").css("visibility", "visible");
            $("#divTipo").css("visibility", "visible");
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
            $("#radPajaroA").prop("checked", false);
        });
        $("#radPerroA").on("click", function () {
            $("#radGatoA").prop("checked", false);
            $("#radPajaroA").prop("checked", false);
        });
        $("#radPajaroA").on("click", function () {
            $("#radGatoA").prop("checked", false);
            $("#radPerroA").prop("checked", false);
        });
        $("#tablaID tbody tr").dblclick(function (e) {
            $('#myModal').modal('show');
            $("#btnModificar").css("visibility", "visible");
            $("#btnEliminar").css("visibility", "visible");
            $("#btnAgregar").css("visibility", "hidden");
            var idSeleccionado = $(e.target).prev().text();
            var nombreSelec = $(e.target).text();
            var cantPatSelec = $(e.target).next().text();
            var tipoSelec = $(e.target).next().next().text();
            var ruidoSelec = $(e.target).next().next().next().text();
            $("#divTipo").css("visibility", "hidden");
            // $("#nombreA").text() = nombreSelec;
            // $("#sondioA").text() = ruidoSelec;
            // let fila = $(target).parent();
            // let celdas = fila.$("td");
            // usuarioID= celdas[0].innerHTML;    
            // document.getElementById("nombreE").value= celdas[1].innerHTML;
            // document.getElementById("apellidoE").value=celdas[2].innerHTML;
            // document.getElementById("fechaE").value=celdas[3].innerHTML;
            // document.getElementById("divOculto").style.visibility = "visible";
            // usuarioGlobal.id= celdas[0].innerHTML;  
            //    var idSeleccionado = $(this).parent().siblings(":first").text();
            //    if(target.nextSibling.hidden == true)
            //    fila = target.parentNode;
            //    var celdas = fila.getElementsByTagName("td");
            //    $("#btnModificar")
            // $('body').removeClass('modal-open'); 
        });
        $("#btnAgregar").click(function () {
            // window.location.href="./index2.html"; //Tomo otro html
            var nombreA = String($("#nombreA").val());
            var sondioA = String($("#sondioA").val());
            var radGatoA = $("#radGatoA").prop("checked");
            var radPerroA = $("#radPerroA").prop("checked");
            //    let radPajaroA:boolean = $("#radPajaroA").prop("checked");
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
            seccionPersonas += "<tr>      <td hidden>" + animalActual.ID + "</td>" +
                "<td>" + animalActual.nombre + "</td>" +
                "<td>" + animalActual.cantPatas + "</td>" +
                "<td>" + animalActual.tipo + "</td>" +
                "<td>" + animalActual.ruido + "</td>" +
                //   "<td>" +      personasCompleto[i].apellido + "</td>" +
                //   "<td>" +      personasCompleto[i].fecha    + "</td>" +
                //   "<td>" +      personasCompleto[i].sexo     + "</td>"+
                //   "<td>" + "<img src='"+ personasCompleto[i].foto + "'id='imgMuestro' height='80'>"+
                //   "<input type='file' "+" hidden>"+"</td>"+
                // "<td>"+"<button class='btn btn-outline-warning' data-toggle='modal' data-target='#myModal' id='addPopup' hidden=>Modificar"+"<i class='fa fa-folder'></i>"+"</button>"+
                // "<button class='btn btn-outline-danger' data-toggle='modal' data-target='#myModal' id='addPopup'>Eliminar"+"<i class='fa fa-trash'></i></button></td>"+
                "</tr>";
            tBodyTable.innerHTML = seccionPersonas;
        }
    }
})(practicaSP || (practicaSP = {}));

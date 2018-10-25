var xml = new XMLHttpRequest();

//Creo una persona Global para manejar datos
var usuarioGlobal = { "id":"","nombre":"","apellido":"","fecha":"","sexo":"","avatar":"" }


$(document).ready(function () {
    
  
    //CREO y MUESTRO TABLA
    $.get("http://localhost:3000/personas",function (data, status) {

        console.log(status);
        console.log(data);

        var personasCompleto = data;
       
            var cuerpoTablaHTML = document.getElementById('tCuerpo');
            var seccionPersonas = "";
            

            for(var i=0; i< personasCompleto.length; i++)
            {

                seccionPersonas += "<tr>  <td hidden>"+ personasCompleto[i].id       + "</td>" +
                                          "<td>" +      personasCompleto[i].nombre   + "</td>" +
                                          "<td>" +      personasCompleto[i].apellido + "</td>" +
                                          "<td>" +      personasCompleto[i].fecha    + "</td>" +
                                          "<td>" +      personasCompleto[i].sexo     + "</td>"+
                                          "<td>" + "<img src='"+ personasCompleto[i].avatar + "'height='100'></td>"
                                 "</tr>" ;

                cuerpoTablaHTML.innerHTML = seccionPersonas;
            }
                    
            
    })//fin $.get

    $("h2").click(function () { 
        $("#listadoPersonas").toggle(1000);
        
    });

    $("#tCuerpo").dblclick(function () {
        
        muestroDivconClick();
        
    })//fin td.dblclick

    $("#btnAgregar").click(function() { 
       $("#divOculto2").show(1000);
        
    });

    $("#btnAgregarConfirm").click(function() { 
        agregarPersona();
        
    });

    $("#btnModificar").click(function () { 
       modificarPersona();
        
    });

    $("#btnEliminar").click(function () { 
        eliminarPersona();
        
    });

    

    $(".btnCerrar").click(function () {
        $(".divOculto").hide(1000);
        
    })
   

    
})//fin del document.ready


//#region Como muestro la tabla 

function loginAccesso() {
    document.getElementById("loginWindow").style.visibility = "hidden";

    document.getElementById("divListado").style.visibility = "visible";

    // xml.onreadystatechange = logPost;

    //obtenemos user y pass del popup log in y enviamos un re post
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("pasw").value;


    xml.open("POST", "http://localhost:3000/login", true);
    xml.setRequestHeader('Content-Type', 'application/json');

    // esto cambiar!! lo veo desde el js del profe
    // var log = { "email": usuario, "password":pass };

    // xml.send(JSON.stringify(log));
    
}


//#endregion

//#region Mostrar y Ocultar div

//MOSTRAR DIV OCULTO con CLICK

function muestroDivconClick() {

   $("#divOculto").show(1000);

    var target = event.target || event.srcElement;

    fila = target.parentNode;

    var celdas = fila.getElementsByTagName("td");

    // document.getElementById("divOculto").style.visibility = "visible";
    
    usuarioGlobal.id= celdas[0].innerHTML;    
    document.getElementById("nombreE").value= celdas[1].innerHTML;
    document.getElementById("apellidoE").value=celdas[2].innerHTML;
    document.getElementById("fechaE").value=celdas[3].innerHTML;
    

    
    if (celdas[4].innerHTML == "Male") {

         var sexo = document.getElementById("radMasculino");

    }
    else {
          var sexo = document.getElementById("radFemenino");
       


    }
   

    sexo.checked = true;

    
}

//#endregion

//#region Alta baja y modificacion de personas

// AGREGAR



function agregarPersona() {

    var flag = true;
    var nombreNuevo = document.getElementById("nombreA").value;
    var apellidoNuevo =document.getElementById("apellidoA").value;
    var fechaNueva = document.getElementById("fechaA").value;

    var sexoNuevo;

    // VALIDO QUE AMBOS CAMPOS TENGAN MAS DE 3 CARACTERES
    if (nombreNuevo.length < 3 || apellidoNuevo.length < 3) {
        alert("El campo debe tener mas de 3 c. ");
        flag= false;
    }



    //VALIDO QUE SELECCIONEN UNO DE LOS DOS SEXOS
    if (document.getElementById("radMasculinoA").checked && document.getElementById("radFemeninoA").checked ||
    (document.getElementById("radMasculinoA").checked == false && document.getElementById("radFemeninoA").checked == false )
    )
    {

        alert("Error, se debe seleccionar un sexo.");
        flag=false;
    } 
    else if(document.getElementById("radFemeninoA").checked) {

        sexoNuevo = "Female";
       

    }
    else{
        sexoNuevo = "Male"; 
    }

   
   
    if(flag== true && confirm("¿Confirma agregar persona?"))
    {
        var spinner = document.getElementById("spinner");
        spinner.style.display = "block";

        $.post("http://localhost:3000/nueva",
        {
                nombre: nombreNuevo,
                apellido: apellidoNuevo,
                sexo: sexoNuevo,
                fecha: fechaNueva
        },
        
        
        function (data, status, jqXHR) {
            transicionSpinner();
        }
        );       
       
    }
}



// MODIFICACION

function modificarPersona() {
    
    var flag = true;
    var nombreEdit = document.getElementById("nombreE").value;
    var apellidoEdit =document.getElementById("apellidoE").value;
    var sexoEdit;

    // VALIDO QUE AMBOS CAMPOS TENGAN MAS DE 3 CARACTERES
    if (nombreEdit.length < 3 || apellidoEdit.length < 3) {
        alert("El campo debe tener mas de 3 c. ");
        flag= false;
    }

    var fechaEdit = document.getElementById("fechaE").value;


    //VALIDO QUE SELECCIONEN UNO DE LOS DOS SEXOS
    if (document.getElementById("radMasculino").checked && document.getElementById("radFemenino").checked ||
    (document.getElementById("radMasculino").checked == false && document.getElementById("radFemenino").checked == false )
    )
    {

        alert("Error, se debe seleccionar un sexo.");
        flag=false;
    } 
    else if(document.getElementById("radFemenino").checked) {

        sexoEdit = "Female";
       

    }
    else{
        sexoEdit = "Male"; 
    }


     if(flag== true && confirm("¿Confirma modificar persona?"))
    {
        document.getElementById("spinner").style.display = "block";

         $.post("http://localhost:3000/editar",
        {
                id: usuarioGlobal.id,
                nombre: nombreEdit,
                apellido: apellidoEdit,
                sexo: sexoEdit,
                fecha: fechaEdit
        },
        
        
        function (data, status, jqXHR) {
            transicionSpinner();
        }
        );
       
    }
  


}

// ELIMINAR

function eliminarPersona() {

    var target = event.target || event.srcElement;
    //tenemos la variable id del boton que es la misma que de la noticia a borrar
    var idaPasar = target.id

    var spinner = document.getElementById("spinner");
    

   
    if(confirm("¿Confirma eliminar persona?"))
    {
        var spinner = document.getElementById("spinner");
            spinner.style.display = "block";

        $.post("http://localhost:3000/eliminar",
        {
                id:  usuarioGlobal.id
                
        },
        function (data, status, jqXHR) {
            transicionSpinner();
        }
        );

    }
        

    
}

//#endregion

//SPINNER (NO ANDA)

function transicionSpinner() {
    
      
    // document.getElementById("spinner").style.display = "block";
   
    //anda flama el tema del spiner solo que es chico y se muestra abajo nada mas 
    

    // $("#divTotal").css("filter", "grayscale(100%)");
 
 
    document.getElementById("spinner").style.display = "none";
    $(".divOculto").hide();


    //No hay chance no toma el fondo 
    $("body").addClass("claseFondo");
        
    location.reload();
    
    

}
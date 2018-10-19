var xml = new XMLHttpRequest();

//Creo una persona Global para manejar datos
var usuarioGlobal = { "id":"","nombre":"","apellido":"","fecha":"","sexo":"" }


window.onload = function () {

    //Muestro la tabla:
    XMLGetPersonas();

    //#region Agrego metodos a los eventos click

    //agrego al evento cuando hago click en la X para ocultar el div
    var btnCerrar = document.getElementById("btnCerrar");
    btnCerrar.addEventListener("click", cierraDiv);

    var btnCerrar2 = document.getElementById("btnCerrar2");
    btnCerrar2.addEventListener("click", cierraDiv2);

    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", muestroDivAgregar);

    // var btnLogin = document.getElementById("submit_login");
    // submit_login.addEventListener("click", loginAccesso);

    var btnAgregarConfirm = document.getElementById("btnAgregarConfirm");
    btnAgregarConfirm.addEventListener("click",agregarPersona)
    
    //agrego al evento cuando hago click en el boton Modificar dentro del div oculto
    var btnModificar = document.getElementById("btnModificar");
    btnModificar.addEventListener("click", modificarPersona);

    //agrego al evento cuando hago click en el boto Eliminar dentro del div ocuto
    var btnEliminar = document.getElementById("btnEliminar");
    btnEliminar.addEventListener("click",eliminarPersona);
    //#endregion
    
}

//#region Como muestro la tabla 

//GET al servidor para armar la tabla
function XMLGetPersonas() {
    xml.onreadystatechange = muestraTabla;

    xml.open("GET","http://localhost:3000/personas",true);



    xml.send();
}

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

//MUESTRO LA TABLA
function muestraTabla() {
    if (xml.readyState == 4) {
        
        if (xml.status == 200) {
            
            var personasCompleto = JSON.parse(xml.responseText);
            var cuerpoTablaHTML = document.getElementById('tCuerpo');
            var seccionPersonas = "";
            

            for(var i=0; i< personasCompleto.length; i++)
            {

                seccionPersonas += "<tr>   <td hidden>"+ personasCompleto[i].id      + "</td>" +
                                          "<td>" +      personasCompleto[i].nombre   + "</td>" +
                                          "<td>" +      personasCompleto[i].apellido + "</td>" +
                                          "<td>" +      personasCompleto[i].fecha    + "</td>" +
                                          "<td>" +      personasCompleto[i].sexo     + "</td>"+
                                 "</tr>" ;
                

                cuerpoTablaHTML.innerHTML = seccionPersonas;
            }
            //Uso el ondblclick para que al hacer dobleclick vaya al metodo muestroDivconClick
            cuerpoTablaHTML.ondblclick = muestroDivconClick;

            console.log(personasCompleto);

        }
    }
}
//#endregion

//#region Mostrar y Ocultar div

// MUESTRO segundo div para agregar
function muestroDivAgregar() {

    document.getElementById("divOculto2").style.visibility = "visible";    

    
}
//OCULTO EL DIV

function cierraDiv() {
    

    document.getElementById("divOculto").style.visibility="hidden";


    
}
function cierraDiv2() {
    document.getElementById("divOculto2").style.visibility="hidden";
}

//MOSTRAR DIV OCULTO con CLICK

function muestroDivconClick() {

   
    var target = event.target || event.srcElement;

    fila = target.parentNode;

    var celdas = fila.getElementsByTagName("td");

    document.getElementById("divOculto").style.visibility = "visible";
    
    usuarioGlobal.id= celdas[0].innerHTML;    
    document.getElementById("nombreE").value= celdas[1].innerHTML;
    document.getElementById("apellidoE").value=celdas[2].innerHTML;
    document.getElementById("fechaE").value=celdas[3].innerHTML;
    

    //limpio radiobutton
    // document.getElementById("radMasculino").checked = false;
    // document.getElementById("radFemenino").checked = false;

    
    if (celdas[4].innerHTML == "Male") {

         var sexo = document.getElementById("radMasculino");
        //  document.getElementById("radFemenino").checked = false;

    }
    else {
          var sexo = document.getElementById("radFemenino");
        //   document.getElementById("radMasculino").checked = false;


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


    if(flag== true && confirm("Confirma agregar persona?"))
    {
        var spinner = document.getElementById("spinner");
        spinner.style.display = "block";

        xml.open("POST","http://localhost:3000/nueva");
        xml.setRequestHeader('Content-Type', 'application/json');

        datosPersonaJson = { "nombre": nombreNuevo, "apellido":apellidoNuevo, "fecha":fechaNueva, "sexo": sexoNuevo };
        xml.send(JSON.stringify(datosPersonaJson));

        xml.onreadystatechange = transicion;
       
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


    if(flag== true && confirm("Confirma modificar persona?"))
    {
        var spinner = document.getElementById("spinner");
        spinner.style.display = "block";

        xml.open("POST","http://localhost:3000/editar");
        xml.setRequestHeader('Content-Type', 'application/json');

        datosPersonaJson = { "id": usuarioGlobal.id,"nombre": nombreEdit, "apellido":apellidoEdit, "fecha":fechaEdit, "sexo": sexoEdit };
        xml.send(JSON.stringify(datosPersonaJson));

        xml.onreadystatechange = transicion;
       
    }
  


}

// ELIMINAR

function eliminarPersona() {

    var target = event.target || event.srcElement;
    //tenemos la variable id del boton que es la misma que de la noticia a borrar
    var idaPasar = target.id

    var spinner = document.getElementById("spinner");


    if (confirm("Confirma eliminar persona?")) {
        spinner.style.display = "block";

        xml.open("POST","http://localhost:3000/eliminar");
        xml.setRequestHeader('Content-Type', 'application/json');

        datosPersonaJson = { "id": usuarioGlobal.id};
        xml.send(JSON.stringify(datosPersonaJson));

        xml.onreadystatechange = transicion;
    }
        

    
}

//#endregion

//SPINNER (NO ANDA)

function transicion() {
    
    //la funcion esta mal.

    
    document.getElementById("spinner").style.display = "block";
    location.reload();
    document.getElementById("spinner").style.display = "none";
        
   
    
    

}
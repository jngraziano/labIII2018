var xml = new XMLHttpRequest();


window.onload = function () {

    //Muestro la tabla:
    XMLGetPersonas();

    var btnTabla = document.getElementById("tabla");
    btnTabla.addEventListener("click",muestroDiv);

    var btnCerrar = document.getElementById("btnCerrar");
    btnCerrar.addEventListener("click", cierraDiv);
    
    var btnModificar = document.getElementById("btnModificar");
    btnModificar.addEventListener("click", modificarPersona);

    
    
}

function XMLGetPersonas() {
    xml.onreadystatechange = muestraTabla;

    xml.open("GET","http://localhost:3000/personas",true);

    xml.send();
}



function muestraTabla() {
    if (xml.readyState == 4) {
        
        if (xml.status == 200) {
            
            var personasCompleto = JSON.parse(xml.responseText);
            var cuerpoTablaHTML = document.getElementById('tCuerpo');
            var seccionPersonas = "";

            for(var i=0; i< personasCompleto.length; i++)
            {

                seccionPersonas += "<tr>   <td>" +      personasCompleto[i].nombre   + "</td>" +
                                          "<td>" +      personasCompleto[i].apellido + "</td>" +
                                          "<td>" +      personasCompleto[i].fecha    + "</td>" +
                                          "<td>" +      personasCompleto[i].sexo     + "</td>"+
                                 "</tr>" ;
             

                cuerpoTablaHTML.innerHTML = seccionPersonas;
            }

            console.log(personasCompleto);

        }
    }
}
function cierraDiv() {
    document.getElementById("divOculto").style.visibility="hidden";

    
}

function muestroDiv() {

   
    var target = event.target || event.srcElement;

    fila = target.parentNode;

    var celdas = fila.getElementsByTagName("td");

    document.getElementById("divOculto").style.visibility = "visible";
    
    
    document.getElementById("nombreE").value=celdas[0].innerHTML;
    document.getElementById("apellidoE").value=celdas[1].innerHTML;
    document.getElementById("fechaE").value=celdas[2].innerHTML;
    

    //limpio radiobutton
    // document.getElementById("radMasculino").checked = false;
    // document.getElementById("radFemenino").checked = false;

    
    if (celdas[3].innerHTML == "Male") {

         var sexo = document.getElementById("radMasculino");
        //  document.getElementById("radFemenino").checked = false;

    }
    else {
          var sexo = document.getElementById("radFemenino");
        //   document.getElementById("radMasculino").checked = false;


    }
   

    sexo.checked = true;

    
}

function modificarPersona() {
    flag = true;

    var nombreEdit = document.getElementById("nombreE").value;
    var apellidoEdit =document.getElementById("apellidoE").value;
    var sexo;


    if (nombreEdit.length < 3 || apellidoEdit.length < 3) {
        alert("El campo debe tener mas de 3 c. ");
        flag= false;
    }

    var fechaEdit = document.getElementById("fechaE").value;

    if (document.getElementById("radMasculino").checked && document.getElementById("radFemenino").checked ||
    (document.getElementById("radMasculino").checked == false && document.getElementById("radFemenino").checked == false )
    )
    {

        alert("Error, se debe seleccionar un sexo.");
        flag=false;
    } 
    else if(document.getElementById("radFemenino").checked) {

        sexo = "Female";
       

    }
    else{
        sexo = "Male"; 
    }


    if(flag== true && confirm("Confirma modificacion?"))
    {
        var spinner = document.getElementById("spinner");
        spinner.style.visibility = "visible";

        xml.open("POST","http://localhost:3000/editar");
        xml.setRequestHeader('Content-Type', 'application/json');

        datosPersonaJson = { "id": 2,"nombre": nombreEdit, "apellido":apellidoEdit, "fecha":fechaEdit, "sexo": sexo };
        xml.send(JSON.stringify(datosPersonaJson));

        xml.onreadystatechange = transicion;
       
    }
  


}

function transicion() {
    
    document.getElementById("spinner").style.visibility = "visible";
    if (xml.readyState ==4) {
        if (xml.status==200) {
            location.reload();
            // alert("Satisfactorio.");
            
        } else{document.getElementById("spinner").style.visibility = "hidden";}
        
    }
    
    

}
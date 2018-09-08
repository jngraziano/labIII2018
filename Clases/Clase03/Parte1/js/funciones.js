

function btnGuardar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;


    // // CABECERA
    // var cabecera = $("#tCabecera");
    // cabecera["0"].innerHTML ="";
       
    //             let cabeceraArmada = $('<th>' + "Nombre" + '</th>' +
    //                                     '<th>' + "Apellido" + '</th>'+
    //                                     '<th>' + "Boton" + '</th>'
    //                                 );
    //             cabecera.append(cabeceraArmada);
       
    // CUERPO
    var cuerpo = document.getElementById("tCuerpo");
   
        cuerpo.innerHTML+="<tr>"+"<td scope='row'>"+ nombre + "</td>"+
                           "<td scope='row'>"+ apellido + "</td>"+
                           "<td scope='row'>"+ "<button class='btn btn-success' onclick='btnBorrar()'>borrar" + "</td>"
                           +"</tr>"; 
    
    document.getElementById("txtNombre").value = null;
    document.getElementById("txtApellido").value = null;
                           
    
}

// si quiero editar visualmente especificamente le cambio el nombre de la clase de lo que sea y lo edito por css
// document.getElementById("txtNombre").className="laquequiera";

function btnBorrar(_parametro) {
    var cuerpo = document.getElementById("tCuerpo");

    if (confirm("Desea borrarlo?")) {
        

        
    }
    
}
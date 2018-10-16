var solicitud = new XMLHttpRequest();
var fila = "";



window.onload = function () {

    //Al iniciar, cuando cambie de estado llama a la funcion CB.
    solicitud.onreadystatechange = callbackGet;
    solicitud.open("GET", "http://localhost:3000/personas", true);
    solicitud.send(null);

    var btnClose = document.getElementById("btnClose");
    btnClose.addEventListener("click", cerrando);

    var btnModificar = document.getElementById("btnModificar");
    btnModificar.addEventListener("click", modificando);

    var btnEliminar = document.getElementById("btnEliminar");
    btnEliminar.addEventListener("click", eliminando);

}

function modificando() {

    var correcto = true;

 

    //Tomo el valor que esta en el texbox nombre y lo asigno a nombre
    var nombre = document.getElementById("txtNombre").value;
    if (nombre.length < 4) {

        document.getElementById("txtNombre").setAttribute("class", "error");
        alert("Nombre debe tener mas de 3 caracteres")
        correcto = false;

    }
    // asigno a celda, las celdas de la fila

    //var celda = fila.getElementsByTagName("td");
    // le asigno a la primer celda el nombre
    //celda[0].innerHTML = nombre;

    var apellido = document.getElementById("txtApellido").value;
    if (apellido.length < 4) {

        document.getElementById("txtApellido").setAttribute("class", "error");
        alert("Apellido debe tener mas de 3 caracteres")
        correcto = false;

    }
    //celda[1].innerHTML = apellido;

    var fecha = document.getElementById("txtFecha").value;
    var fecha_en_partes = fecha.split("-");

    var fechar = new Date(fecha_en_partes[0],fecha_en_partes[1]-1,fecha_en_partes[2]);

    var hoy = new Date()


      if (fechar > hoy) {

        document.getElementById("txtFecha").setAttribute("class", "error");
        alert("Fecha debe ser menor o igual a hoy")
        correcto = false;

      }

    var sexo;
    if (document.getElementById("rdFem").checked) {

        sexo = "Female";

    } else {

        sexo = "Male";

    }

    if (correcto) {

        var spinner = document.getElementById("spinner");
        spinner.style.visibility = "visible";

        solicitud.open("POST", "http://localhost:3000/editar", true);
        solicitud.setRequestHeader('Content-Type', 'application/json');

        datosJson = { "id": fila.id, "nombre": nombre, "apellido": apellido, "fecha": fecha, "sexo": sexo }
        solicitud.send(JSON.stringify(datosJson));

        solicitud.onreadystatechange = callbackPOSTModificar_eliminar;
    }
}

function eliminando() {

    var spinner = document.getElementById("spinner");
    spinner.style.visibility = "visible";

    solicitud.open("POST", "http://localhost:3000/eliminar", true);
    solicitud.setRequestHeader('Content-Type', 'application/json');
    datosJson = { "id": fila.id }
    solicitud.send(JSON.stringify(datosJson));

    solicitud.onreadystatechange = callbackPOSTModificar_eliminar;

}


function callbackPOSTModificar_eliminar() {

    var spinner = document.getElementById("spinner");
    spinner.style.visibility = "visible";

    if (solicitud.readyState == 4) {
        if (solicitud.status == 200) {

            //refresh dp de hacer el post
            location.reload();

        } else { spinner.style.visibility = "hidden"; }
    }
}

function cerrando() {

    if (document.getElementById("popUp").style.visibility = "visible") {
        document.getElementById("popUp").style.visibility = "hidden";
    }

}

function callbackGet() {

    if (solicitud.readyState == 4) {

        if (solicitud.status == 200) {

            var contenido = JSON.parse(solicitud.responseText);
            var tabla = document.getElementById("miTabla");

            for (var i = 0; i < contenido.length; i++) {

                var fila = tabla.insertRow(i + 2);
                var nombre = fila.insertCell(0);
                var apellido = fila.insertCell(1);
                var fecha = fila.insertCell(2);
                var sexo = fila.insertCell(3);

                nombre.innerHTML = contenido[i].nombre;
                apellido.innerHTML = contenido[i].apellido;
                fecha.innerHTML = contenido[i].fecha;
                sexo.innerHTML = contenido[i].sexo;

                fila.setAttribute("id", contenido[i].id);

                fila.ondblclick = editarB;

            }
        }

    }

}

function editarB() {

    // Trae la celda que se clickeo
    var target = event.target || event.srcElement;

    //Asignamos Fila al Padre de la celda que se clickeo... target es la celda.
    fila = target.parentNode;

    //Nos trae todos los td de la fila.
    var celdas = fila.getElementsByTagName("td");

    document.getElementById("popUp").style.visibility = "visible";

    nombre = document.getElementById("txtNombre");
    nombre.setAttribute("class","");
    
    apellido = document.getElementById("txtApellido");
    apellido.setAttribute("class","");

    fecha = document.getElementById("txtFecha");
    fecha.setAttribute("class","");

    //es lo mismo que hacer el nombre.setAttribute("value",celdas[0].innerHTML); pero a veces funciona mejor
    nombre.value = celdas[0].innerHTML;
    apellido.value = celdas[1].innerHTML;
    fecha.value = celdas[2].innerHTML;

    // al clickear en una fila nos indicara el radio button seleccionado.



    if (celdas[3].innerHTML == "Male") {

        sexo = document.getElementById("rdMasc");
    }
    else {
        sexo = document.getElementById("rdFem");

    }
    //le hace el check al radio button de la fila clickeada.
    sexo.checked = true;

}



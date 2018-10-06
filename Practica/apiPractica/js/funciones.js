var xml = new XMLHttpRequest();


window.onload = function () {
    // arrayNoticias = [];
    xml.onreadystatechange = callBackGET;
    // xml.open("GET","http://192.168.2.32:3000/noticias",true);
    xml.open("GET", "http://localhost:3000/noticias", true);
    // uso null osea nada dentro del parentesis en el send porque es un get
    xml.send();
};


function callBackGET() {
    if (xml.readyState == 4) {
        //verifico que tenga una respuesta correcta. 
        if (xml.status == 200) {
            // JSON.parse y JSON.stringify para pasar de string a jsonObject y viceversa
            // var jsonString = JSON.stringify({"edad":20});
            // Lo muestro en el label del html
            // document.getElementById("textoLabel").innerHTML = xml.responseText;
            // puedo pasar el texto a un JSON para poder acceder 
            var noticias = JSON.parse(xml.responseText);
            // for (var i = 0; i < noticias.length; i++) {
            console.log(noticias);
            document.getElementById("titulo1").innerHTML = noticias[0].titulo;
            document.getElementById("noticia1").innerHTML = noticias[0].noticia;
            document.getElementById("titulo2").innerHTML = noticias[1].titulo;
            document.getElementById("noticia2").innerHTML = noticias[1].noticia;
            document.getElementById("titulo3").innerHTML = noticias[2].titulo;
            document.getElementById("noticia3").innerHTML = noticias[2].noticia;
            // }
        }
    }
}

function edicionClick() {
    document.getElementById("add-edit").hidden = false;
}
function btnCerrar() {
    document.getElementById("add-edit").hidden = true;
}

function btnAgregar() {

    xml.onreadystatechange = callBackPOST;

   
    xml.open("POST", "http://localhost:3000/nuevaNoticia", true);
    xml.setRequestHeader('Content-Type','application/json');

    var titulo = document.getElementById("tituloE").value;
    var tema = document.getElementById("tipoTema").value;
    var descripcion = document.getElementById("descripcionE").value;
    var email ="add@add.com";

    var datos ={"titulo":titulo,"tema":tema,"noticia":descripcion,"email":email};

    xml.send(JSON.stringify(datos));
    
}

function callBackPOST() {
    if (xml.readyState == 4) {
        //verifico que tenga una respuesta correcta. 
        if (xml.status == 200) {
            alert("Usuario cargado-");
        }
    }
}

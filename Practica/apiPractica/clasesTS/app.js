"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /// <reference path="../node_modules/@types/jquery/index.d.ts" />
// import { Noticias } from "./noticia";
/*PARCIAL
obtener una lista de elementos alta baja y modificacion todo por html y pegarlo por get y post
*/
// var arrayNoticias:Noticias[];
var xml = new XMLHttpRequest();
window.onload = function () {
    // arrayNoticias = [];
    xml.onreadystatechange = callBack;
    // xml.open("GET","http://192.168.2.32:3000/noticias",true);
    xml.open("GET", "http://localhost:3000/noticias", true);
    // uso null osea nada dentro del parentesis en el send porque es un get
    xml.send();
};
function callBack() {
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
    // let titulo:string = String($('#tituloE').val());
    // let tema: HTMLSelectElement = <HTMLSelectElement>document.getElementById("tipoTema").value;
    // let descripcion:string = document.getElementById("descripcionE").value;
    // let email:string ="add@add.com";
    // let unaNoticia:Noticias = new Noticias(titulo,descripcion,tema,email);
    // console.log(unaNoticia.titulo);
    // console.log(unaNoticia.tema);
    // console.log(unaNoticia.descripcion);
    alert("asd");
}

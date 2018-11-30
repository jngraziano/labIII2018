namespace practicaSP{

    $(document).ready(function () {
        

        $("#addPopup").click(function () {
        // $("#divOculto1").show(1000);
        $("#divOculto1").css("visibility","visible"); 
        });

        $("#btnCerrar").click(function () {
        $("#divOculto1").css("visibility","hidden");
         
        });

        $("#btnLimpia").click(function () {

            localStorage.clear();
            location.reload();
            
        })


        mostrarAnimales();



        $("#radGatoA").on("click",function () {
            $("#radPerroA").prop("checked",false);
            
        });
        $("#radPerroA").on("click",function () {
            $("#radGatoA").prop("checked",false);
            
        });


        $("#btnAgregar").click(function () {
            
                      

           // window.location.href="./index2.html"; //Tomo otro html
           let nombreA:string = String($("#nombreA").val());
           let sondioA:string = String($("#sondioA").val());

           let radGatoA:boolean = $("#radGatoA").prop("checked");
           let radPerroA:boolean = $("#radPerroA").prop("checked");
           let radPajaroA:boolean = $("#radPajaroA").prop("checked");


            let animalesLista = JSON.parse(localStorage.getItem("Localanimal") || "[]");

            // let animales:Array<animal> = new Array<animal>();
            // let animales:JSON;
            
           if (radGatoA) {
            let unGato: gato = new gato(nombreA,sondioA);
            animalesLista.push(JSON.stringify(unGato));
                   
           }
           else if (radPerroA) {
            let unPerro: perro = new perro(nombreA,sondioA);
            animalesLista.push(JSON.stringify(unPerro));
           }
           else{
            let unPajaro: pajaro = new pajaro(nombreA,sondioA);
            animalesLista.push(JSON.stringify(unPajaro));

           }
        //    animales.forEach(Programa.hablar);

           let stringAnimalesLista = JSON.stringify(animalesLista);
          

           localStorage.setItem("Localanimal", stringAnimalesLista);

           location.reload();
        //    let unJson = JSON.parse(localStorage.getItem("animales")); //me dijo el profesor
        //    alert(unJson[0]);
        //    alert(localStorage.getItem("animales"));
        })
       
        
    
    
    });//fin document.ready


    function mostrarAnimales():void {
        let animalesStorage:any|null =  JSON.parse(localStorage.getItem("Localanimal") || "[]");    
    
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
        var seccionPersonas:string = "";

        

        for (let i = 0; i < animalesStorage.length; i++) {
            
            let animalActual = JSON.parse(animalesStorage[i]);

            seccionPersonas += "<tr>       <td>" + animalActual.nombre      + "</td>" +
                                          "<td>" +      animalActual.cantPatas  + "</td>" +
                                          "<td>" +      animalActual.tipo  + "</td>" +
                                          "<td>" +      animalActual.ruido  + "</td>" +
                                        //   "<td>" +      personasCompleto[i].apellido + "</td>" +
                                        //   "<td>" +      personasCompleto[i].fecha    + "</td>" +
                                        //   "<td>" +      personasCompleto[i].sexo     + "</td>"+
                                        //   "<td>" + "<img src='"+ personasCompleto[i].foto + "'id='imgMuestro' height='80'>"+
                                        //   "<input type='file' "+" hidden>"+"</td>"+
                                        "<td>"+"<button class='btn btn-outline-warning' id='btnModif'>Modificar"+"<i class='fa fa-folder'></i>"+"</button>"+
                                        "<button class='btn btn-outline-danger ' id='btnEliminar'>Eliminar"+"<i class='fa fa-trash'></i></button></td>"+
                                 "</tr>" ;
            tBodyTable.innerHTML = seccionPersonas;

    }
}

}


namespace practicaSP{

    $(document).ready(function () {
        

        $("#addPopup").click(function () {
        // $("#divOculto1").show(1000);
        $("#divOculto1").css("visibility","visible"); 
        });

        $("#btnCerrar").click(function () {
        $("#divOculto1").css("visibility","hidden");
         
        });


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
           let patasA:number = Number($("#patasA").val());

           let radGatoA:boolean = $("#radGatoA").prop("checked");
           let radPerroA:boolean = $("#radPerroA").prop("checked");

           let animales:Array<animal> = new Array<animal>();
            
           if (radGatoA) {
            let unGato: gato = new gato(nombreA,patasA);
            animales.push(unGato);
                   
           }
           else if (radPerroA) {
            let unPerro: perro = new perro(nombreA,patasA);
            animales.push(unPerro);
           }
        //    animales.forEach(Programa.hablar);

           let jsonAnimales:string = JSON.stringify(animales);

           localStorage.setItem("key", jsonAnimales);
        //    let unJson = JSON.parse(localStorage.getItem("key")); //me dijo el profesor
        //    alert(unJson[0]);
        //    alert(localStorage.getItem("key"));
        })
       
        
    
    
    });//fin document.ready


    function mostrarAnimales():void {
        let animalesString:string|null =  JSON.parse(localStorage.getItem("key") || "[]");    
    
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

        // for (let i = 0; i < animalesString.length; i++) {
        //     alert(animalesString[i]);
            // seccionPersonas += "<tr>  <td hidden>"+ personasCompleto[i].id       + "</td>" +
            //                               "<td>" +      personasCompleto[i].nombre   + "</td>" +
            //                               "<td>" +      personasCompleto[i].apellido + "</td>" +
            //                               "<td>" +      personasCompleto[i].fecha    + "</td>" +
            //                               "<td>" +      personasCompleto[i].sexo     + "</td>"+
            //                               "<td>" + "<img src='"+ personasCompleto[i].foto + "'id='imgMuestro' height='80'>"+
            //                               "<input type='file' "+" hidden>"+"</td>"+

                                    
                                         

            //                      "</tr>" ;
            // tBodyTable.innerHTML = seccionPersonas;

    // }
}

}


namespace practicaSP{

    $(document).ready(function () {
        

        $("#addPopup").click(function () {
        // $("#divOculto1").show(1000);
        $("#divOculto1").css("visibility","visible");
        
            
        });

        $("#btnCerrar").click(function () {
        $("#divOculto1").css("visibility","hidden");
         
        });

        $("#radGatoA").on("click",function () {
            $("#radPerroA").prop("checked",false);
            
        });
        $("#radPerroA").on("click",function () {
            $("#radGatoA").prop("checked",false);
            
        });


        $("#btnAgregar").click(function () {
            
            //$("btn");
           

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
           alert(localStorage.getItem("key"));
        })
       
        
    
    
    });//fin document.ready
}


/// <reference path="../node_modules/@types/jquery/index.d.ts" />

        function manejadorEventos() {

            // let btnHistorial = document.getElementById("btnHistorial");
            // btnHistorial.addEventListener("click", (e:Event) => this.btnHistorial()        
            // );
            
        }

        // BOTONES

        function btnHisto() 
        {
            let unaOpe = new Clases.Operaciones(2,4,0);
            let dosOpe = new Clases.Operaciones(10,5,2);
    
            var divTabla = document.getElementById("tablaHistorica");
            var cuerpo = document.getElementById("tCuerpo");
            var listaCuentas = [unaOpe,dosOpe];
            
            // alert(unaOpe.num1+unaOpe.num2+unaOpe.op+unaOpe.resultado);
            if(divTabla.hidden != null)
            {
                divTabla.hidden= false;

                for (var i = 0; i < listaCuentas.length; i++) {
                    cuerpo.innerHTML+="<tr><td scope='row'>"+ listaCuentas[i].num1 + "</td>"+
                                    "<td scope='row'>"+ listaCuentas[i].num2 + "</td>"+
                                    "<td scope='row'>"+ listaCuentas[i].op + "</td>"+
                                    "<td scope='row'>"+ listaCuentas[i].resultado + "</td></tr>"; 
                    }
            } 
    
            
        }

        function btnCerrar() {
            var divTabla = document.getElementById("tablaHistorica");
        
            divTabla.hidden = true;
        
        }

        function btnResultado() {

            var num1 =   Number($('#txtNum1').val());

            var num2 =   Number($('#txtNum2').val());
            var opera =  Number($('#tipoMasc').val());

            var result;  
            var unaOperacion = new Clases.Operaciones(num1,num2,opera);
                
          
            result=unaOperacion.resultado;
        
            // document.getElementById("txtNum1")=null;
            // document.getElementById("txtNum2")=null;
            let txtResult = $("#txtResultado");

            txtResult.append("El resultado es: "+result);

            return result;
                

        }

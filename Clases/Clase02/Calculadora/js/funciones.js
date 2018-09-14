function btnResultado(num1,num2) {
    var num1 = document.getElementById("txtNum1").value;
    var num2 = document.getElementById("txtNum2").value;
    var result;  

    var opera = document.getElementById("tipoOperador");
    var operador = opera.selectedIndex;
        
    result=operacion(num1,num2,operador);

    document.getElementById("txtNum1").value=null;
    document.getElementById("txtNum2").value=null;

    return result;
        
}

function info() {

    alert("Calculadora\n"+"Alumno: Julian Graziano"+"\n"+"Division: 3 D");
    
    
}

function validaNUM(num1,num2) {
    var labelResult= document.getElementById("txtResultado");

    if (num1 == "" || num2 == "") {
        labelResult.innerHTML="Debe completar los campos.";
        document.getElementById("txtNum1").className="error";
        document.getElementById("txtNum2").className="error";
        return false;
    }
    else{
        return true;
    }
    
}

function btnHistorial() {

    var divTabla = document.getElementById("tablaHistorica");


    // EN VEZ DE LEVANTAR DESDE EL HTML, HACERLO DESDE UN localStorage O LO QUE SEA
    var num1 = document.getElementById("txtNum1").value;
    var num2 = document.getElementById("txtNum2").value;
    
    var result = btnResultado(num1,num2);

        divTabla.hidden = false;

        var cuerpo = document.getElementById("tCuerpo");
   
        cuerpo.innerHTML+="<tr>"+"<td scope='row'>"+ num1 + "</td>"+
                        //    "<td scope='row'>"+ num2 + "</td>"+
                           "<td scope='row'>"+ num2 + "</td>"+
                           "<td scope='row'>"+ result + "</td>"
                           +"</tr>"; 


    // fecha parcial en tres semanas 14/09
    // clase que viene ajax
    // clase otra jquery
    // la otra clase parcial
    // parcial 12 de octubre

    
    
}

function btnCerrar() {
    var divTabla = document.getElementById("tablaHistorica");

    divTabla.hidden = true;
}

function operacion(num1,num2,op) {
    var flag=0;
    var result;
    var opt;
    var labelResult= document.getElementById("txtResultado");
    if (validaNUM(num1,num2)) {

        document.getElementById("txtNum1").className="exito";
        document.getElementById("txtNum2").className="exito";

        switch (op) {
            case 0:
                result=(+num1+ +num2);
                opt="+";
                break;
            case 1:
                result=num1-num2;
                opt="-";
                break;
            case 2:
                if (num2 == 0) {
                    document.getElementById("txtNum2").className="error";    
                    labelResult.innerHTML= "Error, no se puede dividir por cero. Reingrese." 
                    flag=1;     
                }
                else{
                    result=num1/num2;
                }
                opt="/";
                break;
            case 3:
                result=num1*num2;
                opt="*";
                break;    
            default:
                result=num1+num2;
                opt="+";
                break;
        }
    }
    else{
        flag=1;
    }

    if (flag==0) 
    {
    labelResult.innerHTML= "El resultado de: "+num1+opt+num2+" ---> "+ result+".";
    }
    return result;
}
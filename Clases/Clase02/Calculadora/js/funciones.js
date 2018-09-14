function btnResultado() {
    var num1 = document.getElementById("txtNum1").value;
    var num2 = document.getElementById("txtNum2").value;
    var labelResult= document.getElementById("txtResultado");
    var result;
    var opt;

    if (num1 == "" || num2 == "") {
        labelResult.innerHTML="Debe completar los campos.";
        document.getElementById("txtNum1").className="error";
        document.getElementById("txtNum2").className="error";
    }
    else{
        document.getElementById("txtNum1").className="exito";
        document.getElementById("txtNum2").className="exito";
        var opciones = document.getElementById("tipoOperador");
        if (opciones.selectedIndex == null) {
            opciones.selectedIndex = 0;
        }

        switch (opciones.selectedIndex) {
            case 0:
                result=(+num1+ +num2);
                opt="+";
                break;
            case 1:
                result=num1-num2;
                opt="-";
                break;
            case 2:
                result=num1/num2;
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

    
    document.getElementById("txtNum1").value=null;
    document.getElementById("txtNum2").value=null;

    labelResult.innerHTML= "El resultado de: "+num1+ opt +num2+" es ---> "+ result+".";

    }
        
}

function info() {

    alert("Calculadora\n"+"Alumno: Julian Graziano"+"\n"+"Division: 3 D");
    
    
}
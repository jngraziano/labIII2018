/// <reference path="../clases/persona1.ts" />
var segundoParcial;
(function (segundoParcial) {
    var cliente1 = /** @class */ (function () {
        function cliente1(Nombre, Apellido, Edad, Sexo) {
            //no tengo idea porque tira este error
            // Uncaught TypeError: Object prototype may only be an Object or null: undefined
            // super(Nombre,Apellido);
            // var maximo = calcularID();
            var maximo = 2;
            maximo++;
            this.ID = maximo;
            this.edad = Edad;
            this.sexo = Sexo;
        }
        return cliente1;
    }());
    segundoParcial.cliente1 = cliente1;
    // function calcularID():number{
    //     let personasStorage:string|null =  JSON.parse(localStorage.getItem("LocalPersona") || "[]");    
    //     let valormax = arrayMax(personasStorage);
    //     return valormax;
    // }
    // function arrayMax(arr:any) {
    //     return arr.reduce(function (p:any, v:any) {
    //       return ( p < JSON.parse(v).ID ? JSON.parse(v).ID: p );
    //     },0);
    //   }
})(segundoParcial || (segundoParcial = {}));

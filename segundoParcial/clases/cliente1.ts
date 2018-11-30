/// <reference path="../clases/persona1.ts" />

namespace segundoParcial{

    export class cliente1  {
       
        public ID:number;
        public edad:number;
        public sexo:string;
        
    
        constructor(Nombre:string, Apellido:string,Edad:number,Sexo:string) {
            //no tengo idea porque tira este error
            // Uncaught TypeError: Object prototype may only be an Object or null: undefined
            // super(Nombre,Apellido);
            // var maximo = calcularID();
            var maximo= 2;
            maximo++;
           this.ID = maximo;
           this.edad=Edad;
           this.sexo=Sexo;
           
           

        }
        
    
        
    }


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

}
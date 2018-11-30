namespace practicaSP{

    export class perro extends animal {

        public ID:number;
        public ruido:string;

        constructor(Nombre:string,Ruido:string) {
            
            super(Nombre,4,"perro");

            var maximo = calcularID();
                maximo++;
            this.ID = maximo;
            this.ruido = Ruido;
        }
    
        // haceRuido(input:string):string {
        //     return "guau";
        // }
    }

    function calcularID():number{
        let animalesStorage:string|null =  JSON.parse(localStorage.getItem("Localanimal") || "[]");    
        let valormax = arrayMax(animalesStorage);
        return valormax;
    }

    function arrayMax(arr:any) {
        return arr.reduce(function (p:any, v:any) {
          return ( p < JSON.parse(v).ID ? JSON.parse(v).ID: p );
        },0);
      }

}


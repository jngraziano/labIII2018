namespace practicaSP{

    export class perro extends animal {

        public ruido:string;

        constructor(Nombre:string,Ruido:string) {
            
            super(Nombre,4,"perro");

            this.ruido = Ruido;
        }
    
        // haceRuido(input:string):string {
        //     return "guau";
        // }
    }

}


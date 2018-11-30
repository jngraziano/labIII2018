namespace practicaSP{

    export class pajaro extends animal {

        public ruido:string;

        constructor(Nombre:string,Ruido:string) {
            super(Nombre,2,"pajaro");

            this.ruido = Ruido;

        }
    
        // haceRuido(input:string):string {
        //     return "miau";
        // }
    }

    
}



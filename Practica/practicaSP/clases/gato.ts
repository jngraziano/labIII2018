namespace practicaSP{

    export class gato extends animal {

        public ruido:string;

        constructor(Nombre:string,Ruido:string) {
            super(Nombre,4,"gato");

            this.ruido = Ruido;

        }
    
        // haceRuido(input:string):string {
        //     return "miau";
        // }
    }

    
}


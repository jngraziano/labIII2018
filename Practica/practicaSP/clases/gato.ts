namespace practicaSP{

    export class gato extends animal {

        constructor(Nombre:string,cantidadP:number) {
            super(Nombre,cantidadP);
        }
    
        haceRuido(input:string):string {
            return "miau";
        }
    }

    
}


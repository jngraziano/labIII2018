namespace practicaSP{

    export class perro extends animal {

        constructor(Nombre:string,cantidadP:number) {
            super(Nombre,cantidadP);
        }
    
        haceRuido(input:string):string {
            return "guau";
        }
    }

}


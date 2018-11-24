namespace practicaSP{

    export abstract class animal {
        nombre:string;
        cantPatas:number;
    
        constructor(Nombre:string,cantidadP:number) {
            this.nombre=Nombre;
            this.cantPatas=cantidadP;
        }
    
        abstract haceRuido(input : string) : string;
    
        
    }


}





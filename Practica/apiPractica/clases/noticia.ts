export class Noticias{

    public titulo:string;
    public descripcion:string;
    public tema:any;
    public email:string;

    public constructor (titu:string,noti:string,tema:any,email:string){
        this.titulo=titu;
        this.descripcion=noti;
        this.tema=tema;
        this.email=email;

    }

    public devuelveTema(tema:any):string {
        let devuelvetema:string="";
        switch (tema) {
            case "0":
            devuelvetema="Deportes";
                break;
            case "1":
            devuelvetema="Economia";
            break;
            case "2":
            devuelvetema="Ciencia";
            break;    
            default:
                break;
        }   
        return devuelvetema; 
    }





}
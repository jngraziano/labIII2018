"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Noticias = /** @class */ (function () {
    function Noticias(titu, noti, tema, email) {
        this.titulo = titu;
        this.descripcion = noti;
        this.tema = tema;
        this.email = email;
    }
    Noticias.prototype.devuelveTema = function (tema) {
        var devuelvetema = "";
        switch (tema) {
            case "0":
                devuelvetema = "Deportes";
                break;
            case "1":
                devuelvetema = "Economia";
                break;
            case "2":
                devuelvetema = "Ciencia";
                break;
            default:
                break;
        }
        return devuelvetema;
    };
    return Noticias;
}());
exports.Noticias = Noticias;

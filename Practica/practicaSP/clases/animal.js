"use strict";
var practicaSP;
(function (practicaSP) {
    var animal = /** @class */ (function () {
        function animal(Nombre, cantidadP) {
            this.nombre = Nombre;
            this.cantPatas = cantidadP;
        }
        return animal;
    }());
    practicaSP.animal = animal;
})(practicaSP || (practicaSP = {}));

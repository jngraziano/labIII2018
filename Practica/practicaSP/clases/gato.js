"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var practicaSP;
(function (practicaSP) {
    var gato = /** @class */ (function (_super) {
        __extends(gato, _super);
        function gato(Nombre, cantidadP) {
            return _super.call(this, Nombre, cantidadP) || this;
        }
        gato.prototype.haceRuido = function (input) {
            return "miau";
        };
        return gato;
    }(practicaSP.animal));
    practicaSP.gato = gato;
})(practicaSP || (practicaSP = {}));

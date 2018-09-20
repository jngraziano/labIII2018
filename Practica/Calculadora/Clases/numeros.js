"use strict";
var Clases;
(function (Clases) {
    var Operaciones = /** @class */ (function () {
        /*
        public get NUM1() : number {
            return this.num1;
        }
        public set NUM1S(v : number) {
            this.num1 = v;
        }
        public get NUM2() : number {
            return this.num2;
        }
        public set NUM2S(v : number) {
            this.num2 = v;
        }
        public get Resultado() : number {
            return this.resultado;
        }
        public set ResultadoS(v : number) {
            this.resultado = v;
        }
        public get OP() : any {
            return this.op;
        }
        public set OPs(v : any) {
            this.op = v;
        }
        */
        function Operaciones(numero1, numero2, ope) {
            this.flag = 0;
            if (this.validaNUM(numero1, numero2)) {
                this.num1 = numero1;
                this.num2 = numero2;
                this.op = ope;
                this.resultado = this.Operacion(this.num1, this.num2, this.op);
            }
            else {
                this.flag = 1;
            }
        }
        /**
         * operacionCompleta
         : string        */
        Operaciones.prototype.operacionString = function () {
            return this.num1 + ";" + this.num2 + ";" + this.op + ";" + this.resultado;
        };
        /**
         * Operacion
            num1,num2,op         */
        Operaciones.prototype.Operacion = function (num1, num2, op) {
            var result = 0;
            switch (op) {
                case "0":
                    result = (+num1 + +num2);
                    this.op = "+";
                    break;
                case "1":
                    result = num1 - num2;
                    this.op = "-";
                    break;
                case "2":
                    if (num2 == 0) {
                        this.flag = 2;
                    }
                    else {
                        result = num1 / num2;
                    }
                    this.op = "/";
                    break;
                case "3":
                    result = num1 * num2;
                    this.op = "*";
                    break;
                default:
                    result = num1 + num2;
                    this.op = "+";
                    break;
            }
            return result;
        };
        /**
         * validaNUM
        num1,num2         */
        Operaciones.prototype.validaNUM = function (num1, num2) {
            if (num1 == null || num2 == null) {
                return false;
            }
            // else if(num1 == "" || num2 == ""){
            //     return false;
            // }
            else {
                return true;
            }
        };
        return Operaciones;
    }());
    Clases.Operaciones = Operaciones;
})(Clases || (Clases = {}));

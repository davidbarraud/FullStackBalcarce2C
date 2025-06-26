var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    //Constructor
    function Vehiculo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    // Métodos
    Vehiculo.prototype.acelerar = function (num) {
        this.velocidad += num;
        console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " aceler\u00F3 a ").concat(this.velocidad, " km/h."));
    };
    Vehiculo.prototype.desacelerar = function (num) {
        if (num >= this.velocidad) {
            console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " acaba de frenar."));
        }
        else {
            this.velocidad -= num;
            console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " desaceler\u00F3 a ").concat(this.velocidad, " km/h."));
        }
    };
    Vehiculo.prototype.frenar = function () {
        if (this.velocidad == 0) {
            console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " ya est\u00E1 frenado"));
        }
        else {
            this.velocidad = 0;
            console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " acaba de frenar"));
        }
    };
    return Vehiculo;
}());
// Clase AutoCarrera que hereda de Vehículo
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera(marca, modelo) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.nitroDisponible = true;
        return _this;
    }
    AutoCarrera.prototype.recargarNitro = function () {
        this.nitroDisponible = true;
        console.log("Activaste nuevamente el uso del nitro.");
    };
    AutoCarrera.prototype.usarNitro = function () {
        if (this.nitroDisponible) {
            this.velocidad += 50;
            this.nitroDisponible = false;
            console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " us\u00F3 nitro y ahora va a ").concat(this.velocidad, " km/h!"));
        }
        else {
            console.log("El nitro ya fue usado en ".concat(this.marca, " ").concat(this.modelo, "."));
        }
    };
    return AutoCarrera;
}(Vehiculo));
// Clase Camioneta que hereda de Vehiculo
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, modelo) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.carga = 0;
        return _this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidad += 30;
        console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " activ\u00F3 el turbo y aceler\u00F3 a ").concat(this.velocidad, " km/h."));
    };
    Camioneta.prototype.cargar = function (peso) {
        this.carga += peso;
        console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " carg\u00F3 ").concat(peso, " kg. Carga total: ").concat(this.carga, " kg."));
    };
    Camioneta.prototype.descargar = function () {
        console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " descarg\u00F3 ").concat(this.carga, " kg."));
        this.carga = 0;
    };
    return Camioneta;
}(Vehiculo));
// Clase AutoCiudad que hereda de Vehículo
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad(marca, modelo) {
        return _super.call(this, marca, modelo) || this;
    }
    AutoCiudad.prototype.acelerar = function () {
        this.velocidad += 10;
        console.log("El veh\u00EDculo ".concat(this.marca, " ").concat(this.modelo, " aceler\u00F3 a ").concat(this.velocidad, " km/h."));
    };
    return AutoCiudad;
}(Vehiculo));
//usando las clases
var miAutoCarrera = new AutoCarrera("Ford", "Focus");
var miCamioneta = new Camioneta("Ford", "F150");
var miAutoCiudad = new AutoCiudad("Fiat", "128");
miAutoCarrera.acelerar(25);
miAutoCarrera.usarNitro();
miAutoCarrera.usarNitro();
miAutoCarrera.recargarNitro();
miAutoCarrera.usarNitro();
miAutoCarrera.desacelerar(33);
miAutoCarrera.frenar();
miAutoCarrera.frenar();
console.log("----------------------------");
miCamioneta.cargar(150);
miCamioneta.cargar(300);
miCamioneta.descargar();
miCamioneta.acelerar();
miCamioneta.acelerar();
miCamioneta.acelerar();
miCamioneta.frenar();
console.log("----------------------------");
miAutoCiudad.acelerar();
miAutoCiudad.acelerar();
miAutoCiudad.acelerar();
miAutoCiudad.desacelerar(5);
miAutoCiudad.frenar();

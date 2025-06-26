// Implementamos la clase StarPhone
var smartPhone = /** @class */ (function () {
    function smartPhone() {
        this.estaPrendido = false; // por defecto está apagado
    }
    smartPhone.prototype.prender = function () {
        if (!this.estaPrendido) {
            this.estaPrendido = true;
            console.log("Teléfono prendido.");
        }
        else {
            console.log("El teléfono ya está prendido.");
        }
    };
    smartPhone.prototype.apagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            console.log("Teléfono apagado.");
        }
        else {
            console.log("El teléfono ya está apagado.");
        }
    };
    smartPhone.prototype.llamar = function (numero) {
        if (this.estaPrendido) {
            console.log("Llamando al n\u00FAmero ".concat(numero, "..."));
        }
        else {
            console.log("No se puede llamar. El teléfono está apagado.");
        }
    };
    smartPhone.prototype.sacarFoto = function () {
        if (this.estaPrendido) {
            console.log("¡Foto tomada!");
        }
        else {
            console.log("No se puede sacar foto. El teléfono está apagado.");
        }
    };
    return smartPhone;
}());
var miTelefono = new smartPhone();
miTelefono.prender();
miTelefono.llamar("123456789");
miTelefono.sacarFoto();
miTelefono.apagar();

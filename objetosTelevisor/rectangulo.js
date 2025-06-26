var Rectangulo = /** @class */ (function () {
    //Constructor
    function Rectangulo(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    Rectangulo.prototype.calcularArea = function () {
        var area = this.ancho * this.alto;
        console.log("El area del rectangulo es: ".concat(area, " \n"));
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        var perimetro = 2 * (this.ancho + this.alto);
        console.log("El perimetro del rectangulo es: ".concat(perimetro, " \n"));
    };
    Rectangulo.prototype.mostrarInfo = function () {
        console.log("\n                Alto: ".concat(this.alto, " \n                Altura: ").concat(this.ancho, "\n               -----------\n"));
    };
    return Rectangulo;
}());
var miRectangulo = new Rectangulo(5, 10);
miRectangulo.mostrarInfo();
miRectangulo.calcularArea();
miRectangulo.calcularPerimetro();

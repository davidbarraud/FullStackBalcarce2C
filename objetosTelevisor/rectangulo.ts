class Rectangulo {
    //Propiedades
    private ancho: number;
    private alto: number;
    
    //Constructor
    public constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
        
    }


    public calcularArea(): void {
        let area: number = this.ancho * this.alto;
        console.log (`El area del rectangulo es: ${area} \n`);
    }

    public calcularPerimetro(): void {
        let perimetro:number = 2 * (this.ancho + this.alto);
        console.log (`El perimetro del rectangulo es: ${perimetro} \n`);
    }
   
    public mostrarInfo(): void {
            console.log(`
                Alto: ${this.alto} 
                Altura: ${this.ancho}
               -----------\n`)
        
    }
    

}

const miRectangulo = new Rectangulo(5, 10);
miRectangulo.mostrarInfo();
miRectangulo.calcularArea();
miRectangulo.calcularPerimetro();
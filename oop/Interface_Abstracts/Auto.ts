abstract class Vehiculo{
    //Variables
    protected marca: string;
    protected modelo: string;
    protected velocidad: number;
  
    //Constructor
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.velocidad = 0;
    }
  
    // Métodos

    public acelerar(num: number): void {
      this.velocidad += num;
      console.log(`El vehículo ${this.marca} ${this.modelo} aceleró a ${this.velocidad} km/h.`);
    }

    public desacelerar(num: number): void {
        if (num >= this.velocidad) {
            console.log(`El vehículo ${this.marca} ${this.modelo} acaba de frenar.`);  
        } else {
            this.velocidad -= num;
            console.log(`El vehículo ${this.marca} ${this.modelo} desaceleró a ${this.velocidad} km/h.`);
        }
    }
  
    public frenar(): void {
        if (this.velocidad ==0) {
            console.log(`El vehículo ${this.marca} ${this.modelo} ya está frenado`);   
        } else {
            this.velocidad = 0;
          console.log(`El vehículo ${this.marca} ${this.modelo} acaba de frenar`);
            
        }
    }
  }


  // Clase AutoCarrera que hereda de Vehículo
class AutoCarrera extends Vehiculo {
    private nitroDisponible: boolean;
  
    constructor(marca: string, modelo: string) {
      super(marca, modelo);
      this.nitroDisponible = true;
    }
  
    public recargarNitro(): void {
        this.nitroDisponible = true;
        console.log(`Activaste nuevamente el uso del nitro.`);
         
      }

    public usarNitro(): void {
      if (this.nitroDisponible) {
        this.velocidad += 50;
        this.nitroDisponible = false;
        console.log(`El vehículo ${this.marca} ${this.modelo} usó nitro y ahora va a ${this.velocidad} km/h!`);
      } else {
        console.log(`El nitro ya fue usado en ${this.marca} ${this.modelo}.`);
      }
    }
  }

 // Clase Camioneta que hereda de Vehiculo
class Camioneta extends Vehiculo {
    private carga: number;
  
    constructor(marca: string, modelo: string) {
      super(marca, modelo);
      this.carga = 0;
    }
  
    public acelerar(){
        this.velocidad += 30;
        console.log(`El vehículo ${this.marca} ${this.modelo} activó el turbo y aceleró a ${this.velocidad} km/h.`);
    }

    public cargar(peso: number): void {
      this.carga += peso;
      console.log(`El vehículo ${this.marca} ${this.modelo} cargó ${peso} kg. Carga total: ${this.carga} kg.`);
    }
  
    public descargar(): void {
      console.log(`El vehículo ${this.marca} ${this.modelo} descargó ${this.carga} kg.`);
      this.carga = 0;
    }
  }


   // Clase AutoCiudad que hereda de Vehículo
class AutoCiudad extends Vehiculo {
  

  constructor(marca: string, modelo: string) {
    super(marca, modelo);
   
  }
  public acelerar(): void {
    this.velocidad += 10;
    console.log(`El vehículo ${this.marca} ${this.modelo} aceleró a ${this.velocidad} km/h.`);
  }
 
}




  //usando las clases
const miAutoCarrera = new AutoCarrera("Ford", "Focus");
const miCamioneta = new Camioneta("Ford", "F150");
const miAutoCiudad = new AutoCiudad("Fiat", "128");
miAutoCarrera.acelerar(25);
miAutoCarrera.usarNitro();
miAutoCarrera.usarNitro();
miAutoCarrera.recargarNitro();
miAutoCarrera.usarNitro();
miAutoCarrera.desacelerar(33);
miAutoCarrera.frenar();
miAutoCarrera.frenar();

console.log(`----------------------------`);
miCamioneta.cargar(150);
miCamioneta.cargar(300);
miCamioneta.descargar();
miCamioneta.acelerar();
miCamioneta.acelerar();
miCamioneta.acelerar();
miCamioneta.frenar();

console.log(`----------------------------`);
miAutoCiudad.acelerar();
miAutoCiudad.acelerar();
miAutoCiudad.acelerar();
miAutoCiudad.desacelerar(5);
miAutoCiudad.frenar();

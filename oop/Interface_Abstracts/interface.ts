// Definimos la interfaz
interface Telefono {
    prender(): void;
    apagar(): void;
    llamar(numero: string): void;
  }
  
  // Implementamos la clase StarPhone
  class smartPhone implements Telefono {
    private estaPrendido: boolean;
  
    constructor() {
      this.estaPrendido = false; // por defecto está apagado
    }
  
    public prender(): void {
      if (!this.estaPrendido) {
        this.estaPrendido = true;
        console.log("Teléfono prendido.");
      } else {
        console.log("El teléfono ya está prendido.");
      }
    }
  
   public apagar(): void {
      if (this.estaPrendido) {
        this.estaPrendido = false;
        console.log("Teléfono apagado.");
      } else {
        console.log("El teléfono ya está apagado.");
      }
    }
  
public llamar(numero: string): void {
      if (this.estaPrendido) {
        console.log(`Llamando al número ${numero}...`);
      } else {
        console.log("No se puede llamar. El teléfono está apagado.");
      }
    }
  
public sacarFoto(): void {
      if (this.estaPrendido) {
        console.log("¡Foto tomada!");
      } else {
        console.log("No se puede sacar foto. El teléfono está apagado.");
      }
    }
  }

const miTelefono = new smartPhone();

miTelefono.prender();
miTelefono.llamar("123456789");
miTelefono.sacarFoto();
miTelefono.apagar();
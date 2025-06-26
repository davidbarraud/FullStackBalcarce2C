//Superclase
class Animal {
    constructor(public nombre: string) { }
    respirar(): void {
        console.log(`${this.nombre} está respirando.`)
    }
    moverse(): void {
        console.log(`${this.nombre} se está moviendo.`)
    }
}

//Subclase de Animal
class Invertebrado extends Animal {
    tipoEsqueleto: string = "exoesqueleto"
    caracteristicas(): void {
        console.log(`${this.nombre} es un invertebrado con ${this.tipoEsqueleto}.`)
    }
}

//Subclase de Animal
class Vertebrado extends Animal {
    tipoEsqueleto: string = "esqueleto interno"
    caracteristicas(): void {
        console.log(`${this.nombre} es un vertebrado con ${this.tipoEsqueleto}.`)
    }
}


//Subclase de Vertebrado
class Ave extends Vertebrado {
    puedeVolar: boolean
    constructor(nombre: string, puedeVolar: boolean) {
        super(nombre)
        this.puedeVolar = puedeVolar
    }
    ponerHuevos(): void {
        console.log(`${this.nombre} está poniendo huevos.`)
    }
    volar(): void {
        if (this.puedeVolar) {
            console.log(`${this.nombre} está volando.🐦`)
        } else {
            console.log(`${this.nombre} no puede volar 🐧.`)
        }
    }
}

//Subclase de Vertebrado
class Mamifero extends Vertebrado {
    tienePelo: boolean = true
    amamantar(): void {
        console.log(`${this.nombre} está amamantando a sus crías.`)
    }
}

//Subclase final hereda directamente de Mamifero y sigue toda la cadena hasta Animal
class Caballo extends Mamifero {
    galopar(): void {
        console.log(`${this.nombre} está galopando.`)
    }
}

// const medusa = new Invertebrado("Medusín")
// medusa.respirar()
// medusa.moverse()
// medusa.caracteristicas()

// const paloma = new Ave("Nicasia", true)
// paloma.respirar()
// paloma.moverse()
// paloma.ponerHuevos()
// paloma.volar()

// const pinguino = new Ave("Chilli Willy", false)
// pinguino.volar()

const caballo = new Caballo("Tornado")
caballo.moverse()
caballo.respirar()
caballo.caracteristicas()
caballo.amamantar()
caballo.galopar()
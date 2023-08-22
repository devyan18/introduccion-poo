
class Animal {
    constructor(public nombre: string) {}

    private emitirSonido() {
        console.log("Haciendo un sonido");
    }

    protected sonido () {
        this.emitirSonido()
    }

}

class Perro extends Animal {

    constructor(nombre: string, private raza: string) {
        super(nombre);
    }

    sonido() {
        console.log("Guau guau");
    }
}

enum Raza {
    Blanco,
    Gris,
    Negro
}

class Gato extends Animal {
    constructor(nombre: string, private raza: Raza) {
        super(nombre);
    }

    sonido() {
        switch (this.raza) {
            case Raza.Blanco:
                console.log("Blanco")
                break;
            case Raza.Gris:
                console.log("Gris")
                break;
            default:
                console.log("Negro")
                break;
        }
    }
}

const perro = new Perro("Max", "Labrador");
const gato = new Gato("Luna", Raza.Gris);

perro.sonido(); // Salida: "Guau guau"
gato.sonido();  // Salida: "Miau miau"

export {}



const asdasd: Animal = new Animal("asdasd")



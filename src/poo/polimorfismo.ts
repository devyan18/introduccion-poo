class Animal { // clase padre
    emitirSonido() {
        console.log("Haciendo un sonido genérico");
    }
}

class Perro extends Animal { // clase hijo que extiende de la clase padre, heredando las funcionalidades
    emitirSonido() {
        console.log("Guau guau");
    }
}

class Gato extends Animal {
    emitirSonido() {
        console.log("Miau miau");
    }
}

const perro: Perro = new Animal();
const gato: Animal = new Gato();

perro.emitirSonido(); // Salida: "Guau guau"
gato.emitirSonido();  // Salida: "Miau miau"

export {}
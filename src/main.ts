export {}

// como armar los tipos pero de los objetos:

class Person {
  constructor (
    private name: string,
    private age: number
  ) {}

  // metodos
  hablar () {
    console.log("Hablando...")
  }

  getAge () {
    return this.age
  }

  setAge (newAge: number) {
    this.age = newAge
  }
}


const persona = new Person("asdas", 123123)
persona.hablar()
persona.getAge()
persona.setAge(123)

const persona2 = new Person("asdasd", 12)
persona2.hablar()
persona2.setAge(13)

// 280-2 : testing some interrogants

class Persona {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  saludar() {
    return `Hola, mi nombre es ${this.name} ${this.lastName}`;
  }
}

const marco = new Persona("Marco", "Rossel");

console.log(marco); // Persona { name: 'Marco', lastName: 'Rossel' }

marco.name = "Marcus";
console.log(marco);

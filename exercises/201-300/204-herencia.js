// ejercicio 204: implementar una jerarquia de herencia con extends.

// ojo solo esta desde verciones mas recients de ES

class Persona {
  constructor(nombre, apellido, identificacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.identificacion = identificacion;
  }
}

// ahora usamos extends.

class Estudiante extends Persona {
  constructor(nombre, apellido, identificacion, run, carrera, semestre) {
    super(nombre, apellido, identificacion);

    this.carrera = carrera;
    this.semestre = semestre;
    this.run = run;
  }
}

class Profesor extends Persona {
  constructor(nombre, apellido, identificacion, profecion, sueldo) {
    super(nombre, apellido, identificacion);
    this.profecion = profecion;
    this.sueldo = sueldo;
  }
}

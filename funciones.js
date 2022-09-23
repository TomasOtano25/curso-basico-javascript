// Declarativas

function miFunction() {
  return 3;
}

//Expresion (expresivas) (funciones anonimas)

var miExpresion = function (a, b) {
  return a + b;
};

console.log(miExpresion(5, 5));
console.log(miFunction());

// Funcion declarativa

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Sebastian Garcia");

// El uso de return

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 8));

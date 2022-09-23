// Es una estructura de datos
// Valor que guarda valores
// Estructura o lista que guarda todo tipo de valores (string, objeto, number)

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

// Longitud del arraglo

console.log(frutas.length);

// Acceso a un unico elemento

console.log(frutas[0]);
console.log(frutas[2]);

// Anadir elementos al final del arreglo

frutas.push("Uvas");

console.log(frutas);

// Eliminar en ultimo elemento del arreglo

frutas.pop("Uvas");

console.log(frutas);

// Agregar un valor al inicio del arreglo

frutas.unshift("Uvas");

console.log(frutas);

// Eliminar un valor el inicio del arreglo

frutas.shift();

console.log(frutas);

// Buscar el indice o posicion de un elemento

var posicion = frutas.indexOf("Cereza");

console.log(indice);

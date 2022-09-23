// Objetos: funcion constructora

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

// Crear una nueva instancia
var autoNuevo = new auto("Toyota", "Camry", 2022);
var autoNuevo2 = new auto("Tesla", "Model 3S", 2021);
var autoNuevo3 = new auto("Tesla", "Model X", 2020);

console.log(autoNuevo);
console.log(autoNuevo.marca);
console.log(autoNuevo2);

// TODO: RETO con las funciones constructoras

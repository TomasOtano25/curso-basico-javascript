// Objetos
// -- Propiedades

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2018,
};

console.log(miAuto);
console.log(miAuto.marca);
console.log(typeof miAuto.marca);
console.log(miAuto.annio);
console.log(typeof miAuto.annio);

// Metodos de objetos

var miAuto2 = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2018,
  detalleDelAuto: function () {
    console.log(`Auto: ${this.modelo} ${this.annio}`);
  },
};

miAuto2.detalleDelAuto();

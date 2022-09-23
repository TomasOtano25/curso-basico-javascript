// Metodos de recorridos de Arrays

var productos = [
  { nombre: "Bicicleta", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

// filter(): nos permite validar una condicion y generar un nuevo arreglo

var productoFiltrados = productos.filter(function (producto) {
  return producto.costo <= 500;
});

console.log(productoFiltrados);

// map(): recorre nuestro arreglo, permitiendo mapear y obtener lo que deseamos

var nombreProductos = productos.map(function (producto) {
  return producto.nombre;
});

console.log(nombreProductos);

// find(): nos permite encontrar algo dentro de nuestro arreglo

var encuentraProducto = productos.find(function (producto) {
  return producto.nombre === "Laptop";
});

console.log(encuentraProducto);

// forEach(): Nos permite recorrer y ejecutar comandos

productos.forEach(function (producto) {
  console.log(producto.nombre);
});

// some(): valida si dentro de nuestro arreglo se cumple una condicion y debuelve 'true' o 'false'

var productosBaratos = productos.some(function (producto) {
  return producto.costo <= 700;
});

console.log(productosBaratos);

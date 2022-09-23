var preguntar = prompt("Ingrese tu opcion: piedra, papel o tijera: ");
var usuario = preguntar.toLowerCase();
var opciones = ["piedra", "papel", "tijera"];

var pc = opciones[Math.floor(Math.random() * 3)];

switch (true) {
  case usuario === pc:
    console.log("Es un empate");
    break;
  case usuario == opciones[0] && pc === opciones[2]:
  case usuario == opciones[1] && pc === opciones[0]:
  case usuario == opciones[3] && pc === opciones[1]:
    console.log("GANASTE el RETO");
    break;
  default:
    console.log("GANA la PC o PERDISTE el RETO");
}

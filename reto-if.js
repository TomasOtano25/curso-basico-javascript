var opcion1 = "Piedra";
var opcion2 = "Papel";
var opcion3 = "Tijera";

var resultado = function (usuario, pc) {
  if (usuario != pc) {
    if (usuario === opcion1 && pc === opcion3) {
      console.log("El usuario GANO");
    } else if (usuario === opcion2 && pc === opcion1) {
      console.log("El usuario GANO");
    } else if (usuario === opcion3 && pc === opcion2) {
    } else {
      console.log("La PC GANO");
    }
  } else {
    console.log("Empate: 0 puntos");
  }
};

resultado(opcion2, opcion3);

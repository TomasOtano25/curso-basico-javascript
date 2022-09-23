//Ejemplos en los que Boolean devuelve
console.log(Boolean(0)); //False
console.log(Boolean(null)); //False
console.log(Boolean(NaN)); //False
console.log(Boolean(undefined)); //False
console.log(Boolean(false)); //False
console.log(Boolean("")); //False

// Valores verdaderos
console.log(Boolean(1)); //True
console.log(Boolean("a")); //True
console.log(Boolean([])); //True
console.log(Boolean({})); //True
console.log(Boolean(function () {})); //True
console.log(Boolean(true)); //True

// coercion implicita

var a = 4;

var b = a + "7";

console.log(b);
console.log(typeof b);

var a1 = 4;

var b1 = a * "7";

console.log(b1);
console.log(typeof b1);

// coercion explicita

var a2 = 25;

var b2 = String(a2);

console.log(b2);
console.log(typeof b2);

var c = Number(b2);

console.log(typeof c);

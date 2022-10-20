// Crea un archivo JS que contenga las siguientes líneas

// Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
  return true;
}
const devuelveTrue = siempreTrue();
console.log(devuelveTrue);

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asíncrona() {
  console.log("Hola soy una promesa");
}
setTimeout(asíncrona, 5000);

// Una función generadora de índices pares automáticos
function* generaIndicesPares() {
  let i = 0;
  while (true) {
    i = i + 2;
    if (i > 10) {
      return i;
    }
    yield i;
  }
}
const gen = generaIndicesPares();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
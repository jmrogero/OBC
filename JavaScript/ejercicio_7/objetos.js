// Crea un archivo llamado objetos.js que contenga las siguientes líneas

//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "Chema",
    apellido: "RG",
    edad: 38,
    altura: 1.70,
    eresDesarrollador: false
}
console.log(datosPersonales);

//Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = datosPersonales.edad;
console.log(miEdad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosAmigos = [
    {nombre: "Chema", apellido: "RG", edad: 38, altura: 1.70, eresDesarrollador: false},
    {nombre: "Juan", apellido: "PG", edad: 37, altura: 1.85, eresDesarrollador: false},
    {nombre: "Raul", apellido: "GR", edad: 40, altura: 1.60, eresDesarrollador: true},
]
console.log(datosAmigos);

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const datosOrdenados = datosAmigos.sort((a ,b) => a.edad - b.edad)
console.log(datosOrdenados);
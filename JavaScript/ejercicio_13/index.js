//Una cadena de texto con tu Nombre
let nombre = 'Jose Maria';
console.log(nombre);

//Otra cadena de texto con tu Apellido
let apellido = "Rogero";
console.log(apellido);

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroLetasEstudiante = estudiante.length;
console.log(numeroLetasEstudiante);

//Una variable que contenga la primera letra del Nombre
let numeroLetasNombre = nombre.length;
console.log(numeroLetasNombre);
let primeraLetraNombre = estudiante[0];
console.log(primeraLetraNombre);

//Otra variable que contenga la última letra del Apellido
let numeroLetasApellido = apellido.length;
console.log(numeroLetasApellido);
let ultimaLetraApellido = apellido[5];
console.log(ultimaLetraApellido);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminarEspaciosEstudiante = estudiante.trim();
console.log(eliminarEspaciosEstudiante);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombreContenidoEstudiante = estudiante.includes(nombre);
console.log(nombreContenidoEstudiante);
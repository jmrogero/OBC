// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//Un nuevo Set con los nombres de tu familia
const arrayFamilia = ["Papa", "Mama", "Hermana_1", "Hermana_2", "yo"];
const familiaSet = new Set (arrayFamilia);
console.log(arrayFamilia);
console.log(familiaSet);

//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familiaSet.add("yo")
console.log(familiaSet);

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familiaSet.add("JavaScript")
console.log(familiaSet);
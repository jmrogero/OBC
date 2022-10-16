//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["leche","pan","yogurt","cafe","tomate"];
console.log(listaCompra);

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: "Alien: el octavo pasajero", director: "Ridley Scott", fecha: 1979},
    {titulo: "Evil Dead", director: "Federico Álvarez", fecha: 2013},
    {titulo: "First Blood", director: "Ted Kotcheff", fecha: 1982}
];
console.log(peliculas);

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const listaPeliculasPost2010 = peliculas.filter(obj => obj.fecha < 2010) ;
console.log(listaPeliculasPost2010);

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = peliculas.map(obj => obj.director);
console.log(listaDirectores);

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = peliculas.map(obj => obj.titulo);
console.log(listaTitulos);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaDirectoresTitulosConcat = (listaDirectores.concat(listaTitulos));
console.log(listaDirectoresTitulosConcat);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaDirectoresTitulosPropagacion = [...listaDirectores, ...listaTitulos];
console.log(listaDirectoresTitulosPropagacion);
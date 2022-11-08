const nombre = "Chema";
const apellido = "RG";
const persona = {
    nombre: nombre,
    apellido: apellido
};


localStorage.setItem("misDatos", JSON.stringify(persona))
var datos = JSON.parse(localStorage.getItem("misDatos"));

sessionStorage.setItem("misDatos", JSON.stringify(persona))
var datos = JSON.parse(sessionStorage.getItem("misDatos"));

document.cookie ="misDatos=" + persona; "max-age=120; ";

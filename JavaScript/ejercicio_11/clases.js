class estudiante {
    constructor(nombre, asignaturas){
        this.nombre = nombre
        this.asignaturas = asignaturas
        }
    obtenDatos(){
        return (`El nombre del estudiante es ${this.nombre} y sus asignaturas son ${this.asignaturas}`)
    }
}

const estudiante_1 = new estudiante ("Chema", ["Javascript", "HTML", "CSS"])
estudiante_1.obtenDatos()
console.log(estudiante_1.obtenDatos())
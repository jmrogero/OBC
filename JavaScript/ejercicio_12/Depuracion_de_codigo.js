function fibonacci(num){
    const lista = [0, 1];
    for(let i = 2; i < num; i++){
        lista[i] = lista[i - 1] + lista [i - 2];
    }
    return lista;
}
let num = 6
const serie = fibonacci(num);
console.log(serie)
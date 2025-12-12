/*
 *recibe numero
contador a cero
crea array donde poner cosas:w

for por parametro numero
arrayagrega al ultimo con push
muestra con console
finalmente llamo la funcion...
 * */
const esPrimo=(numero)=>{
    let contador=0;
    let numeros=[];
    for(let i=0;i<numero;i++){
        numeros.push(i+1);
    }
    console.log(numeros)
}
esPrimo(7);


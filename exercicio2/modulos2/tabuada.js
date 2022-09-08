/**************************************************************************************
 * Objetivo: Funcao que permite calcular as tabuadas escolhidas 
 * Data: 15/08/2022
 * Autor: Samuel Matos
 * Versão: 1.0
 *************************************************************************************/
const calcularTabuada = function (numInicial, numFinal, contInicial, contFinal) {
    let tabuadaI = parseInt(numInicial);
    let tabuadaF = parseInt(numFinal);
    let contI = parseInt(contInicial);
    let contF = parseInt(contFinal);

    let tabuada = 0;
    let resultado;
    for (tabuada = tabuadaI; tabuada <= tabuadaF; tabuada++) 
    {
        let cont = 0; 
        for (cont = contI; cont <= contF; cont++) 
        {
            resultado = tabuada * cont;
            console.log(`${tabuada} x ${cont} = ${resultado}`);
        }
    }
}
module.exports = {
    calcularTabuada
}
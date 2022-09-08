/***************************************************************************
 * Objetivo: Criar um sistema de exbicao de numeros pares e impares separadamente 
 * Data: 15/08
 * Autor: Samuel Matos
 * Versão: 1.0
 ***************************************************************************/
 const getPares = function (numero1, numero2) {
    let numIncial = parseInt(numero1);
    let numFinal = parseInt(numero2);
    let pares = [];
    let erro = true;

    while (numIncial <= numFinal) 
    {
        if (numIncial % 2 == 0)
        {
            pares.push(numIncial);
            erro = false;
        }
        numIncial +=1;
    }
    if (erro)
        return false;
    else
        return pares;
}

//Retorna uma sequencia de numeros impares
const getImpares = function (numero1, numero2) {
    let numIncial = parseInt(numero1);
    let numFinal = parseInt(numero2);
    let impares = [];
    let erro = true;

    while (numIncial <= numFinal) 
    {
        if (numIncial % 2 != 0)
        {
            impares.push(numIncial);
            erro = false;
        }
        numIncial +=1;
    }
    if (erro)
        return false;
    else
        return impares;
}
module.exports = {
    getPares,
    getImpares
}
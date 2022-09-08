/***************************************************************************
 * Objetivo: Criar um sistema de exbicao de numeros pares e impares separadamente 
 * Data: 15/08
 * Autor: Samuel Matos
 * Versão: 1.0
 ***************************************************************************/
console.log('---------- Sistema de Numeros Pares e Impares ----------');
//Import da biblioteca readline que permite a interacao com o usuario 
var readline = require('readline');
//Import do arquivo de functions 
const { getPares, getImpares } = require('./modulos3/parimpar.js');
//Instancia o objeto para criar a interacao com o usuario 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Digite o numero inicial do sitema: ', function (numeroInicial) {
    let numInicial = numeroInicial;
    entradaDados.question('Digite o numero final do sistema: ', function (numeroFinal) {
        let numFinal = numeroFinal;
        let erro = false;
        if (numInicial > 0 && numInicial < 500) 
        {
            if (numFinal >= 100 && numFinal < 1001)         
            {
                if (numInicial == numFinal) 
                {
                    erro = true; 
                    console.log('Numeros iguais, por favor digite numeros diferentes');
                }
                else 
                {
                    console.log(getPares(numInicial, numFinal));
                    console.log(getImpares(numFinal, numFinal));
                }
            }
            else
            {
                erro = true;
                console.log('Digite valores em intervalo valido entre 100 (cem) e 1001 (Mil e um)');
            }
        }
        else 
        {
            erro = true;
            console.log('Digite valores em intervalo valido entre 0 (zero) e 500 (Quinhentos)');
        }
    })
})
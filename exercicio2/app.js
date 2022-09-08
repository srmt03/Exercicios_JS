/**************************************************************************************
 * Objetivo: Sistema que permite calcular personalizadamente tabuadas 
 * Data: 15/08/2022
 * Autor: Samuel Matos
 * Versão: 1.0
 *************************************************************************************/
console.log('---------- Sistema de Tabuada ----------');
//Import da biblioteca readline que permite a interacao com o usuario 
var readline = require('readline');
//Import do arquivo de function
const { calcularTabuada } = require('./modulos2/tabuada.js');
//Instancia o objeto para criar a interacao com o usuario 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 
//Entrada das tabuadas
entradaDados.question('Digite a tabuada que deseja para iniciar: ', function (tabuadaInicial) {
    let numInicial = tabuadaInicial;
    entradaDados.question('Digite a tabuada que deseja para finalizar: ', function (tabuadaFinal) {
        let numFinal = tabuadaFinal;

        if (numInicial <= 2 && numFinal <= 100) 
        {
            //Entradas dos contadores
            entradaDados.question('Digite o inicio do contador: ', function (contadorInicial) {
                let contInicial = contadorInicial;
                entradaDados.question('Digite o final do contador: ', function (contadorFinal) {
                    let contFinal = contadorFinal;
                    
                    if (contInicial >= 0 && contFinal < 51)
                    {
                        calcularTabuada(numInicial, numFinal, contInicial, contFinal);
                    }
                    else
                        console.log('O contador deve iniciar a partir de 0 (zero) e o final deve ser até 50 (cinquenta)');
                })
            })
        } 
        else
            console.log('O valor inicial deve ser a partir de 2 (dois) e o final deve ser até 100 (cem)');
    })
})
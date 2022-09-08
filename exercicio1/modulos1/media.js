/*************************************************************************************
 * Objetivo: Criar funcoes que permitem a valiidacao e calculo das medias entre notas de aluno
 * Data: 04/08/2022
 * Autor: Samuel Matos 
 * Versão: 2.0
 *************************************************************************************/
const validarNotas = function (nota1, nota2, nota3, nota4) {
    if (nota1 <= 100 || nota2 <= 100 || nota3 <= 100 || nota4 <= 100)
        return true;
    else
    {
        console.log('Digite as notas no intervalo válido entre 0 (zero) e 100 (cem)');
        return false;
    }
}
const calcularMedia = function (nota1, nota2, nota3, nota4) {
    let media;
    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
    return media;
}
const aprovacao = function (media) {
    let mediaAluno = media;
    let statusAluno;
    if (mediaAluno >= 70)
        statusAluno = 'APROVADO'
    else if (mediaAluno <= 50)
        statusAluno = 'REPROVADO'
    else if (mediaAluno >= 50 && mediaAluno <= 69) 
        statusAluno = 'EXAME'
    return statusAluno;
}
const exame = function (media, notaExame) {
    let mediaAluno = media;
    let nota = notaExame;
    let notaFinal;
    notaFinal = (parseFloat(nota) + parseFloat(mediaAluno)) / 2;
    return notaFinal;
}

const aprovacaoExame = function (notaFinal) {
    let statusAluno;
    if (notaFinal > 60)
            statusAluno = 'APROVADO'
        else
            statusAluno = 'REPROVADO'
    return statusAluno;
}

// const generoAluno = function (sexoAluno) {
//     let generoAluno = sexoAluno;
//     switch (generoAluno) {
//         case 'MASCULINO':
//         case 'M':
//             genAluno = 'O Aluno';
//             genProf = 'Professor'
//             break;
//         case 'FEMININO':
//         case 'F':
//             genAluno = 'A Aluna';
//             genProf = 'Professora'
//             break;
//         case 'OUTRO':
//         case 'O':
//             genAluno = 'O Aluno';
//             genProf =  'Professor';
//             break;
//         return genero;
//     }
// }

module.exports = {
    aprovacaoExame,
    calcularMedia, 
    validarNotas, 
    aprovacao, 
    exame
}

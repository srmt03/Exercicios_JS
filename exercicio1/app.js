/**********************************************************************************
 * Objetivo: Criar um sistema para uma escolar calcular as medias dos seus alunos
 * Data: 04/08/2022
 * Autor: Samuel Matos
 * Versão: 1.0
 **********************************************************************************/
console.log('---------- Sistema de Médias da UNIVERSIDADE  ----------');
//Import da biblioteca readline que permite a interacao com o usuario 
var readline = require('readline');
//Import do arquivo de functions
const { calcularMedia, validarNotas, aprovacao, exame, aprovacaoExame } = require('./modulos1/media.js');
//Instancia o objeto para criar a interacao com o usuario 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 
//Entrada do nome do aluno
entradaDados.question('Digite o nome do aluno: ', function (nome) {
    let nomeAluno = nome;
    //Entrada do sexo do aluno
    entradaDados.question('Qual o sexo do aluno: \nF(Feminino) \nM(Masculino) \nO(Outro) \n', function (genAluno) {
        let sexoAluno = genAluno;
        //let genero = genero(sexoAluno);

        //Entrada do nome do professor
        entradaDados.question('Digite o nome do professor: ', function (professor) {
            let nomeProfessor = professor;
            //Entrada do sexo do professor 
            entradaDados.question('Qual o sexo do professor: \nF(Feminino) \nM(Masculino) \nO(Outro) \n', function (genProf) {
                let sexoProf = genProf;
                //let genero = genero(sexoProf);

                //Entrada do nome do curso 
                entradaDados.question('Qual o nome do curso: ', function (curso) {
                    let nomeCurso = curso;
                    //Entrada do nome da disciplina
                    entradaDados.question('Qual o nome da disciplina: ', function (disciplina) {
                        let nomeDisciplina = disciplina;
                        //Entrada das notas
                        entradaDados.question('Digite a nota 1: ', function (valor1) {
                            let nota1 = valor1;
                            entradaDados.question('Digite a nota 2: ', function (valor2) {
                                let nota2 = valor2;
                                entradaDados.question('Digite a nota 3: ', function (valor3) {
                                    let nota3 = valor3;
                                    entradaDados.question('Digite a nota 4: ', function (valor4) {
                                        let nota4 = valor4;
                                        let erro = false;
                                        
                                        //Validacao dos dados do aluno e do professor
                                        if (nomeAluno == '' || sexoAluno == '' || nomeProfessor == '' 
                                        || sexoProf == '' || nomeCurso == ''|| nomeDisciplina == '') 
                                        {
                                            erro = true;
                                            console.log('Dados incompletos, complete por favor.');
                                        } 
                                        //Validacao das notas preenchidas
                                        else if (nota1 == '' || nota2 == ''|| nota3 == '' || nota4 == '') 
                                        {
                                            erro = true;
                                            console.log('É necessário informar todas as notas para o realizar o cálculo.');
                                        }
                                        //Validando se as notas estao dentro do intervalo correto
                                        else if (validarNotas(nota1, nota2, nota3, nota4))
                                        {
                                           let media =  calcularMedia(nota1, nota2, nota3, nota4);
                                           let statusAluno = aprovacao(media);

                                           if (statusAluno == 'EXAME') 
                                           {
                                               console.log('Você ficou abaixo da media e precisou fazer um exame de recuperação,');
                                               entradaDados.question('Digite sua nota do Exame: ', function (valor5) {
                                                   let notaExame = valor5;
                                                   let notaFinal = exame(media, notaExame);
                                                   let aprovacao = aprovacaoExame(notaFinal);

                                                   if (aprovacao == 'APROVADO') 
                                                   {
                                                       console.log('----- RELATÓRIO FINAL DO ALUNO -----');
                                                       console.log(`O Aluno, ${nomeAluno} foi ${statusAluno} na disciplina ${nomeDisciplina}`);
                                                       console.log(`Curso: ${nomeCurso}`);
                                                       console.log(`Professor: ${nomeProfessor}`);
                                                       console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);
                                                       console.log(`Média Final: ${media}`);
                                                       console.log(`Média Final do Exame: ${notaFinal}}`);
                                                       console.log('-----------------------------------');
                                                       console.log('----------- PÁRABENS!!! -----------');
                                                   }
                                                   else if (aprovacao == 'REPROVADO')
                                                   {
                                                       console.log('----- RELATÓRIO FINAL DO ALUNO -----');
                                                       console.log(`O Aluno, ${nomeAluno} foi ${statusAluno} na disciplina ${nomeDisciplina}`);
                                                       console.log(`Curso: ${nomeCurso}`);
                                                       console.log(`Professor: ${nomeProfessor}`);
                                                       console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}`);
                                                       console.log(`Média Final: ${media}`);
                                                       console.log(`Média Final do Exame: ${notaFinal}}`);
                                                       console.log('-----------------------------------');
                                                   }
                                               })
                                           } 
                                           else if (statusAluno == 'APROVADO') 
                                           {
                                               console.log('----- RELATÓRIO FINAL DO ALUNO -----');
                                               console.log(`O Aluno, ${nomeAluno} foi ${statusAluno} na disciplina ${nomeDisciplina}`);
                                               console.log(`Curso: ${nomeCurso}`);
                                               console.log(`Professor: ${nomeProfessor}`);
                                               console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4},`);
                                               console.log(`Média Final: ${media}`);
                                               console.log('-----------------------------------');
                                               console.log('----------- PÁRABENS!!! -----------');
                                               console.log('------ Você está: APROVADO! -------'); 
                                           } 
                                           else if (statusAluno == 'REPROVADO') 
                                           {
                                                console.log('----- RELATÓRIO FINAL DO ALUNO -----');
                                                console.log(`O Aluno, ${nomeAluno} foi ${statusAluno} na disciplina ${nomeDisciplina}`);
                                                console.log(`Curso: ${nomeCurso}`);
                                                console.log(`Professor: ${nomeProfessor}`);
                                                console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}`);
                                                console.log(`Média Final: ${media}`);
                                                console.log(`Média Final do Exame: ${notaFinal}}`);
                                                console.log('-----------------------------------');
                                           }
                                        }  
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
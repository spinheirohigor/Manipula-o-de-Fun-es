// ## Atividade 1: Alunos Aprovados

// 1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
// 2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// 3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.



//metodo 01, com laço for.
function classe() {
    let alunos = [higor = { nome: 'Higor', nota: 10 }, suzi = { nome: 'Suzi', nota: 8 }, samuel = { nome: 'Samuel', nota: 4 }];
    let mediafinal = 8;
    let aprovados = [];
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= mediafinal) {
            aprovados[i] = (alunos[i].nome);

        }
    }
    console.log(aprovados);
}
classe();

//metodo 02 com do while e desestruturação

function turma() {
    const alunos = [higor = { nome: 'Higor', nota: 2 }, suzi = { nome: 'Suzi', nota: 8 }, samuel = { nome: 'Samuel', nota: 9 }, { nome: 'Blaitz', nota: 5 }];
    let aprovados = [];
    let i = 0; let x = 0; const media = 8;

    do {
        const { nome, nota } = alunos[i];
        if (nota >= media) { aprovados[x] = nome; x++; }
        i++;
    } while (i < alunos.length);

    console.log(`Os alunos aprovados são:\n${aprovados.join("\n")}`);
}

turma();
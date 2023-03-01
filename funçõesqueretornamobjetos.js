function criarPessoa(nome){
    return{
        nome:nome
    };
}

let pessoa1 = criarPessoa('Matheus')
let pessoa2 = criarPessoa('João')

console.log(pessoa1.nome);
console.log(pessoa2.nome);

// as funções que retornam objetos são parecidas com as constructor functions, porem não utiliza o new, mas o objeto é criado com o retorno da função

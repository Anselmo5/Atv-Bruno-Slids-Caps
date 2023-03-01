let pessoa ={
    nome:'Matheus',
}

pessoa.idade = 29;

pessoa.falar = function(){
    console.log('Olá');
}

delete pessoa.idade
delete pessoa.falar

console.log(pessoa);
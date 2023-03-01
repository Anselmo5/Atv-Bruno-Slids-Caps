function pesssoa(nome){
    this.nome = nome;
}

let pessoa1 = new pesssoa('Matheus');
let pessoa2 = new pesssoa('joão');

console.log(pessoa1.nome);
console.log(pessoa2.nome);

// uma das formas de criar objetos atraves da function constructor
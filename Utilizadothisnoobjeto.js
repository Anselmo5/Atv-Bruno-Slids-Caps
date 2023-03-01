let pessoa ={
    nome:'Matheus',
}

pessoa.idade = 29;

pessoa.falar = function(){
    console.log('Olá, eu tenho' +this.idade+'anos');  // this - este exemp: eu tenho esta idade
}


pessoa.falar();


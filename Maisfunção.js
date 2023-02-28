let pessoa ={
    nome : 'bruno',
    getnome: function(){
        console.log("O nome é: " + this.nome);
    },

    setnome: function(novoNome){
        this.nome = novoNome;
    }
}

pessoa.getnome();
pessoa.setnome('teste');
pessoa.getnome();
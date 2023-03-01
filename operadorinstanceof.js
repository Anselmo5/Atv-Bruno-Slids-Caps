function robo(nome,arma){
    this.nome = nome;
    this.arma = arma;

}


    function Humano(nome){
        this.nome = nome;
    }

    let android = new robo('Xvz', 'Punhos');
    console.log(android instanceof robo);
    console.log(android instanceof Humano);
function robo(nome,arma){
    this.nome = nome;
    this.arma = arma;

}

let robo1 = new robo('teste', 'revolver');
let robo2 = new robo('teste', 'revolver');

    console.log(robo1 === robo2);
    let robo3 = robo1;
    console.log(robo1 === robo3);
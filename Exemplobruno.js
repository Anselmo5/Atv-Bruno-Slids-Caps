let calcule = class {
    constructor(valor1,valor2){
        this.valor1 = 10;
        this.valor2 = 20;

    };

    formulacalc(){
        return this.valor1 + this.valor2
      
    }
}

let novovalue = new calcule(10,20);
console.log(novovalue.formulacalc());  
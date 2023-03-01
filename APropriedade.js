function newobj(x){
    return{
        x:x
    };
}

let y = newobj(1);

function newobjtwo(x){
    this.x = x;
}

let z = new newobjtwo(2);

console.log(y.constructor);
console.log(z.constructor);


// uma loja que vende, camisas e canecas 
// abstração delas é produto
// produto tem nome e tem preço 


function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function (quantia){
    this.preco += quantia; 
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco),
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

//const camiseta = new Camiseta('Gola polo', 100, "preta");
//camiseta.aumento(100);
//console.log(camiseta);

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco),
    this.material = material
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca1 =  new Caneca("caneca vm", 100, "plastico");
caneca1.aumento(100);
console.log(caneca1);
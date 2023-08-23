function Produto (nome, preco) {
    // função construtora
    this.nome = nome;
    this.preco = preco;
    }
    
    Produto.prototype.desconto = function(percentual) {
        this.preco= this.preco * ((100 - percentual)/100);
    };
    
    

    const p2 = {
    nome: "Caneca",
    preco: 100
    }

    Object.setPrototypeOf(p2, Produto.prototype);
    p2.desconto(100);
     console.log(p2);
function Produtos (nome, preco, estoque){
   
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //  o valor
        writable: true, // pode alterar
        configurable: true, // configuravel
        
    })
    
    object.defineProperties(this, {
        nome: { enumerable: true, //mostra a chave
        value: nome, // o valor
        writable: true, // pode alterar
        configurable: true, // configuravel
        },
        preco: { enumerable: true, //mostra a chave
        value: preco, // mostra o valor
        writable: true, // pode alterar
        configurable: true, // configuravel
        }

        
    } )
}